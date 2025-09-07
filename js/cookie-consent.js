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
            // Try to open Google's privacy controls with fallback
            acknowledgeNotice();
            cookieConsent.remove();
            
            if (!openGooglePrivacyControls(() => {
                window.location.href = 'cookie-policy.html';
            })) {
                // Additional fallback just in case
                setTimeout(() => {
                    window.location.href = 'cookie-policy.html';
                });
            }
        });
    }
    
    // Function to acknowledge the cookie notice
    function acknowledgeNotice() {
        localStorage.setItem('cookieNoticed', 'true');
    }
    
    // Function to handle opening Google's privacy controls with robust fallback
    function openGooglePrivacyControls(fallbackCallback) {
        if (typeof window.googlefc !== 'undefined' && typeof window.googlefc.showRevocationMessage === 'function') {
            try {
                // Attempt to show Google's privacy controls
                window.googlefc.showRevocationMessage();
                console.log("Google privacy controls opened successfully");
                return true;
            } catch (error) {
                console.error("Error opening Google privacy controls:", error);
                // Execute fallback if provided
                if (typeof fallbackCallback === 'function') {
                    fallbackCallback();
                }
                return false;
            }
        } else {
            console.log("Google privacy controls not available");
            // Execute fallback if provided
            if (typeof fallbackCallback === 'function') {
                fallbackCallback();
            }
            return false;
        }
    }
    
    // Link privacy settings to Google CMP
    const privacySettingsLink = document.getElementById('privacy-settings');
    if (privacySettingsLink) {
        privacySettingsLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Try to open Google's privacy controls with fallback to cookie policy page
            if (!openGooglePrivacyControls(() => {
                window.location.href = 'cookie-policy.html';
            })) {
                // Additional fallback if the function returns false but doesn't execute the callback
                // (shouldn't happen with the current implementation, but added for robustness)
                setTimeout(() => {
                    window.location.href = 'cookie-policy.html';
                }, 500);
            }
        });
    }
    
    // Direct privacy control link - alternative approach to trigger Google's CMP
    const directPrivacyLink = document.getElementById('direct-privacy-control');
    if (directPrivacyLink) {
        directPrivacyLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Alternative method to trigger Google's CMP
            if (typeof window.__tcfapi === 'function') {
                try {
                    window.__tcfapi('displayConsentUi', 2, function() {
                        console.log('TCF API consent UI displayed');
                    });
                } catch (error) {
                    console.error('Error displaying TCF consent UI:', error);
                    // Try our regular method as fallback
                    openGooglePrivacyControls(() => {
                        window.location.href = 'cookie-policy.html';
                    });
                }
            } else {
                // If TCF API not available, use our regular method
                openGooglePrivacyControls(() => {
                    window.location.href = 'cookie-policy.html';
                });
            }
        });
    }
    
    // Initial check to show the cookie notice
    showCookieNotice();
    
    // Additional handler for Google's CMP delayed loading
    // Sometimes Google's CMP loads after our script has initialized
    window.addEventListener('message', function(event) {
        try {
            const data = JSON.parse(event.data);
            if (data && data.gfcPresent) {
                console.log("Google CMP detected via postMessage");
                // Refresh the privacy controls if needed
            }
        } catch (e) {
            // Not a JSON message or not the one we're looking for
        }
    });
});
