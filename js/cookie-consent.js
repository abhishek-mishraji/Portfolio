// Simplified Cookie Consent Implementation
document.addEventListener('DOMContentLoaded', function() {
    // Check if we should show the cookie notice
    function shouldShowCookieNotice() {
        return !localStorage.getItem('cookieNoticed');
    }

    // Function to create and show the cookie notice
    function showCookieNotice() {
        if (!shouldShowCookieNotice()) return;
        
        // Create the cookie notice banner
        const cookieConsent = document.createElement('div');
        cookieConsent.className = 'cookie-consent show';
        cookieConsent.innerHTML = `
            <div class="cookie-text">
                <p>This website uses necessary cookies to ensure proper functionality. 
                For more information, please see our <a href="cookie-policy.html">Cookie Policy</a>.</p>
            </div>
            <div class="cookie-buttons">
                <button class="cookie-btn customize">Cookie Settings</button>
                <button class="cookie-btn acknowledge">OK</button>
            </div>
        `;
        
        document.body.appendChild(cookieConsent);
        
        // Event listener for acknowledge button
        cookieConsent.querySelector('.acknowledge').addEventListener('click', function() {
            acknowledgeNotice();
            cookieConsent.remove();
        });
        
        // Event listener for settings button
        cookieConsent.querySelector('.customize').addEventListener('click', function() {
            // Direct to Google CMP settings if available
            if (window.googlefc && window.googlefc.showRevocationMessage) {
                window.googlefc.showRevocationMessage();
                acknowledgeNotice();
                cookieConsent.remove();
            } else {
                // Otherwise go to cookie policy page
                window.location.href = 'cookie-policy.html';
            }
        });
    }
    
    // Function to acknowledge the cookie notice
    function acknowledgeNotice() {
        localStorage.setItem('cookieNoticed', 'true');
    }
    
    // Link privacy settings to Google CMP
    const privacySettingsLink = document.getElementById('privacy-settings');
    if (privacySettingsLink) {
        privacySettingsLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Try to use Google's CMP revocation message
            if (window.googlefc && window.googlefc.showRevocationMessage) {
                window.googlefc.showRevocationMessage();
            } else {
                // Fallback to cookie policy page
                window.location.href = 'cookie-policy.html';
            }
        });
    }
    
    // Initial check to show the cookie notice
    showCookieNotice();
});
