// Simplified Cookie Consent Implementation
document.addEventListener('DOMContentLoaded', function() {
    const privacySettingsLink = document.getElementById('privacy-settings');
    if (privacySettingsLink) {
        privacySettingsLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'cookie-policy.html';
        });
    }
});
    // Function to acknowledge the cookie notice
