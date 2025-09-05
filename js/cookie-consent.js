// This file has been replaced with Google's certified CMP
// Custom consent solution disabled in favor of Google's Privacy & Messaging solution

console.log('Using Google certified CMP instead of custom solution');

// DISABLED: Original cookie consent code
/*
document.addEventListener('DOMContentLoaded', function() {
    // Check if consent was already given
    if (!localStorage.getItem('cookieConsent')) {
        // Show the cookie consent banner after a short delay
        setTimeout(function() {
            document.getElementById('cookieConsent').classList.add('show');
        }, 1000);
    }

    // Handle accept all button
    document.getElementById('acceptAll').addEventListener('click', function() {
        acceptAll();
    });

    // Handle reject all button
    document.getElementById('rejectAll').addEventListener('click', function() {
        rejectAll();
    });

    // Handle customize button
    document.getElementById('customize').addEventListener('click', function() {
        document.getElementById('cookieSettingsModal').classList.add('show');
    });

    // Handle modal close button
    document.getElementById('modalClose').addEventListener('click', function() {
        document.getElementById('cookieSettingsModal').classList.remove('show');
    });

    // Handle save preferences button
    document.getElementById('savePreferences').addEventListener('click', function() {
        savePreferences();
    });

    // Handle cookie policy link
    document.getElementById('cookiePolicyLink').addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'cookie-policy.html';
    });

    // Handle cookie settings link in footer
    if (document.getElementById('openCookieSettings')) {
        document.getElementById('openCookieSettings').addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('cookieSettingsModal').classList.add('show');
        });
    }

    // If necessary cookies checkbox is checked, it should not be able to be unchecked
    document.getElementById('necessaryCookies').checked = true;
    document.getElementById('necessaryCookies').disabled = true;

    // Load saved preferences if they exist
    loadSavedPreferences();
});

// Function to accept all cookies
function acceptAll() {
    const consentData = {
        necessary: true,
        analytics: true,
        advertising: true,
        preferences: true,
        dateAccepted: new Date().toISOString(),
        consentVersion: '1.0'
    };
    
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    hideCookieConsent();
    
    // Enable Google Analytics, AdSense, etc.
    enableGoogleServices();
}

// Function to reject all cookies except necessary ones
function rejectAll() {
    const consentData = {
        necessary: true,
        analytics: false,
        advertising: false,
        preferences: false,
        dateAccepted: new Date().toISOString(),
        consentVersion: '1.0'
    };
    
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    hideCookieConsent();
    
    // Disable Google Analytics, AdSense, etc.
    disableGoogleServices();
}

// Function to save custom preferences
function savePreferences() {
    const consentData = {
        necessary: true, // Always required
        analytics: document.getElementById('analyticsCookies').checked,
        advertising: document.getElementById('advertisingCookies').checked,
        preferences: document.getElementById('preferenceCookies').checked,
        dateAccepted: new Date().toISOString(),
        consentVersion: '1.0'
    };
    
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    document.getElementById('cookieSettingsModal').classList.remove('show');
    hideCookieConsent();
    
    // Enable or disable services based on preferences
    if (consentData.analytics) {
        enableAnalytics();
    } else {
        disableAnalytics();
    }
    
    if (consentData.advertising) {
        enableAdvertising();
    } else {
        disableAdvertising();
    }
}

// Function to hide the cookie consent banner
function hideCookieConsent() {
    document.getElementById('cookieConsent').classList.remove('show');
}

// Function to load saved preferences
function loadSavedPreferences() {
    const savedConsent = localStorage.getItem('cookieConsent');
    if (savedConsent) {
        const consentData = JSON.parse(savedConsent);
        
        // Set checkboxes based on saved preferences
        document.getElementById('analyticsCookies').checked = consentData.analytics;
        document.getElementById('advertisingCookies').checked = consentData.advertising;
        document.getElementById('preferenceCookies').checked = consentData.preferences;
        
        // Apply these settings
        if (consentData.analytics) {
            enableAnalytics();
        }
        
        if (consentData.advertising) {
            enableAdvertising();
        }
    }
}

// Function to enable Google services
function enableGoogleServices() {
    enableAnalytics();
    enableAdvertising();
}

// Function to disable Google services
function disableGoogleServices() {
    disableAnalytics();
    disableAdvertising();
}

// Function to enable Google Analytics
function enableAnalytics() {
    // Code to enable Google Analytics
    console.log('Google Analytics enabled');
}

// Function to disable Google Analytics
function disableAnalytics() {
    // Code to disable Google Analytics
    console.log('Google Analytics disabled');
    
    // Set GA opt-out cookie
    window['ga-disable-UA-XXXXXXXX-X'] = true;
}

// Function to enable Google AdSense
function enableAdvertising() {
    // Code to enable Google AdSense
    console.log('Google AdSense enabled');
}

// Function to disable Google AdSense
function disableAdvertising() {
    // Code to disable Google AdSense
    console.log('Google AdSense disabled');
}
*/
