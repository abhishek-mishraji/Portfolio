# Google Certified CMP Implementation Guide

## Overview

This document explains how Google's certified Consent Management Platform (CMP) has been implemented on this website to comply with GDPR regulations for serving personalized ads to users in the European Economic Area (EEA), UK, and Switzerland.

## What is a CMP?

A Consent Management Platform (CMP) is a tool that helps websites comply with privacy regulations like GDPR by:

- Informing users about cookies and data collection
- Obtaining consent for data processing activities
- Managing user preferences and consent records
- Communicating these preferences to advertising partners

## Google's Certified CMP

We've implemented Google's own CMP solution, which is fully certified and complies with the IAB Transparency and Consent Framework (TCF). This solution:

1. Displays a consent message to users in applicable regions
2. Collects and stores user consent preferences
3. Passes consent signals to Google's ad systems and other ad tech providers
4. Provides users with an interface to update their preferences at any time

## Implementation Details

### 1. Google Funding Choices Integration

We've added the Google Funding Choices script to our website:

```html
<script
  async
  src="https://fundingchoicesmessages.google.com/i/pub-3958044956648566?ers=1"
  nonce="RANDOMSTR1NG"
></script>
<script nonce="RANDOMSTR1NG">
  (function () {
    function signalGooglefcPresent() {
      if (!window.frames["googlefcPresent"]) {
        if (document.body) {
          const iframe = document.createElement("iframe");
          iframe.style =
            "width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;";
          iframe.style.display = "none";
          iframe.name = "googlefcPresent";
          document.body.appendChild(iframe);
        } else {
          setTimeout(signalGooglefcPresent, 0);
        }
      }
    }
    signalGooglefcPresent();
  })();
</script>
```

### 2. Privacy Settings Link

We've added a "Privacy Settings" link in the footer that allows users to revisit their consent choices:

```html
<a href="#" id="privacy-settings">Privacy Settings</a>
```

With JavaScript handler:

```javascript
document
  .getElementById("privacy-settings")
  .addEventListener("click", function (e) {
    e.preventDefault();
    if (window.googlefc && window.googlefc.showRevocationMessage) {
      window.googlefc.showRevocationMessage();
    }
  });
```

## How It Works

1. **First Visit**: When a user from the EEA, UK, or Switzerland visits the site, they'll see Google's consent message.
2. **User Choice**: The user can accept, reject, or customize their consent preferences.
3. **Persistence**: Their choice is remembered for future visits.
4. **Changing Preferences**: Users can click "Privacy Settings" in the footer to revisit their choices.

## AdSense Configuration

The AdSense implementation has been updated to work with the TCF framework:

```html
<script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3958044956648566"
  crossorigin="anonymous"
></script>
```

## Google Ad Manager Configuration

If you're using Google Ad Manager, you'll need to:

1. Log in to your Google Ad Manager account
2. Go to Admin > Privacy & messaging
3. Select "European user consent"
4. Choose "TCF v2"
5. Configure your consent message settings
6. Save changes

## Benefits of Using Google's CMP

1. **Certified Solution**: Google's CMP is already certified and meets all requirements.
2. **Easy Integration**: Minimal code changes needed.
3. **Automatic Updates**: Google keeps the solution updated with regulatory changes.
4. **Clear Documentation**: Well-documented by Google with support resources.

## Relevant Documentation

- [Google Ad Manager: EU user consent policy](https://support.google.com/admanager/answer/7666366)
- [IAB Transparency & Consent Framework](https://iabeurope.eu/transparency-consent-framework/)
- [Google Funding Choices](https://support.google.com/fundingchoices/)

## Maintenance

No special maintenance is required as Google manages updates to the CMP. However, you should:

1. Keep your AdSense or Ad Manager account in good standing
2. Check for any policy updates from Google
3. Ensure the "Privacy Settings" link remains functional

---

Last updated: September 5, 2025
