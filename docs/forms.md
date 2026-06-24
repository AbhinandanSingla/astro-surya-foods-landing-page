# Surya Foods — Form Specifications

> **Purpose**: Complete specification for all lead generation forms on the website. AI agents should reference this when building, modifying, or debugging forms. Backend integration engineers should use this as their API contract reference.

---

## 1. Form Overview

| Form | Page | Form ID | Purpose | Anchor |
|---|---|---|---|---|
| Export Inquiry | `/global-exports` | `export-inquiry-form` | International broker lead capture | `#inquiry-form` |
| Distributor Application | `/048-brand` | `distributor-form` | Domestic distributor lead capture | `#distributor-form` |

### Current State
- **Frontend only** — forms render complete HTML with client-side validation
- **No backend wired** — forms do not submit data anywhere
- **Planned integration**: n8n webhooks or AWS SES

### Future Integration Notes
```javascript
// The form submit handler should be replaced with something like:
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  
  const response = await fetch('https://your-n8n-webhook-url.com/webhook/form', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  
  if (response.ok) {
    // Show success message
  } else {
    // Show error message
  }
});
```

---

## 2. Export Inquiry Form

### Form Metadata
| Property | Value |
|---|---|
| **Form ID** | `export-inquiry-form` |
| **Form Name** | Export Inquiry |
| **Method** | POST |
| **Action** | `""` (empty — no backend yet) |
| **Submit Button Text** | Submit Inquiry |
| **Success Message** | Thank you! Your inquiry has been received. Our export team will contact you within 24 business hours. |

### Field Specifications

| Field Name | HTML Name | Type | Label | Placeholder | Required | Validation Rules |
|---|---|---|---|---|---|---|
| Full Name | `fullName` | `text` | Full Name | `e.g., John Smith` | ✅ | Min 2 chars, max 100 |
| Company Name | `companyName` | `text` | Company Name | `e.g., Global Rice Trading Co.` | ✅ | Min 2 chars, max 200 |
| Country | `country` | `text` | Country | `e.g., United Arab Emirates` | ✅ | Min 2 chars |
| Business Email | `email` | `email` | Business Email | `e.g., john@company.com` | ✅ | Valid email format |
| Phone Number | `phone` | `tel` | Phone Number (with country code) | `e.g., +971-XX-XXXXXXX` | ✅ | Min 7 chars, allows +, -, (), spaces, digits |
| Interested Products | `products` | `select` (multi) | Interested Products | `Select products...` | ✅ | At least 1 selected |
| Volume Requirements | `volume` | `text` | Annual Volume Requirements | `e.g., 500 MT per year` | ❌ | Free text, max 200 chars |
| Message | `message` | `textarea` | Additional Message | `Tell us about your requirements, preferred Incoterms, packaging needs...` | ❌ | Max 2000 chars |

### Product Options (for multi-select)
| Value | Display Label |
|---|---|
| `1121-raw` | 1121 Basmati — Raw |
| `1121-steam` | 1121 Basmati — Steam |
| `1121-sella` | 1121 Basmati — Sella |
| `1509-raw` | 1509 Basmati — Raw |
| `1509-steam` | 1509 Basmati — Steam |
| `1509-sella` | 1509 Basmati — Sella |
| `1718-raw` | 1718 Basmati — Raw |
| `1718-steam` | 1718 Basmati — Steam |
| `1718-sella` | 1718 Basmati — Sella |
| `pusa-raw` | Traditional Pusa — Raw |
| `pusa-steam` | Traditional Pusa — Steam |
| `pusa-sella` | Traditional Pusa — Sella |
| `other` | Other (specify in message) |

### Expected JSON Payload (for backend integration)
```json
{
  "formType": "export",
  "fullName": "John Smith",
  "companyName": "Global Rice Trading Co.",
  "country": "United Arab Emirates",
  "email": "john@company.com",
  "phone": "+971-50-1234567",
  "products": ["1121-raw", "1121-steam", "1509-sella"],
  "volume": "500 MT per year",
  "message": "Looking for a reliable supplier for the UAE market...",
  "submittedAt": "2024-01-15T10:30:00Z",
  "source": "website-export-form"
}
```

---

## 3. Distributor Application Form

### Form Metadata
| Property | Value |
|---|---|
| **Form ID** | `distributor-form` |
| **Form Name** | Distributor Application |
| **Method** | POST |
| **Action** | `""` (empty — no backend yet) |
| **Submit Button Text** | Apply for Distribution |
| **Success Message** | Thank you! Your application has been received. Our distribution team will review it and contact you within 3-5 business days. |

### Field Specifications

| Field Name | HTML Name | Type | Label | Placeholder | Required | Validation Rules |
|---|---|---|---|---|---|---|
| Full Name | `fullName` | `text` | Full Name | `e.g., Rajesh Kumar` | ✅ | Min 2 chars, max 100 |
| Business Name | `businessName` | `text` | Business / Company Name | `e.g., Kumar Distributors Pvt. Ltd.` | ✅ | Min 2 chars, max 200 |
| City / Region | `city` | `text` | City / Region | `e.g., Jaipur, Rajasthan` | ✅ | Min 2 chars |
| State | `state` | `select` | State | `Select your state` | ✅ | Must select a value |
| Business Email | `email` | `email` | Business Email | `e.g., rajesh@company.com` | ✅ | Valid email format |
| Phone Number | `phone` | `tel` | Phone Number | `e.g., +91-XXXXXXXXXX` | ✅ | Min 10 chars, Indian phone format |
| Distribution Network | `network` | `textarea` | Describe Your Current Distribution Network | `Tell us about your existing retail/wholesale network, fleet size, coverage area...` | ❌ | Max 2000 chars |
| Message | `message` | `textarea` | Additional Message | `Any other details you'd like to share...` | ❌ | Max 2000 chars |

### Indian States Options (for select dropdown)
```
Andhra Pradesh, Arunachal Pradesh, Assam, Bihar, Chhattisgarh, Goa, 
Gujarat, Haryana, Himachal Pradesh, Jharkhand, Karnataka, Kerala, 
Madhya Pradesh, Maharashtra, Manipur, Meghalaya, Mizoram, Nagaland, 
Odisha, Punjab, Rajasthan, Sikkim, Tamil Nadu, Telangana, Tripura, 
Uttar Pradesh, Uttarakhand, West Bengal, 
Andaman & Nicobar Islands, Chandigarh, Dadra & Nagar Haveli and Daman & Diu, 
Delhi, Jammu & Kashmir, Ladakh, Lakshadweep, Puducherry
```

### Expected JSON Payload (for backend integration)
```json
{
  "formType": "distributor",
  "fullName": "Rajesh Kumar",
  "businessName": "Kumar Distributors Pvt. Ltd.",
  "city": "Jaipur",
  "state": "Rajasthan",
  "email": "rajesh@company.com",
  "phone": "+91-9876543210",
  "network": "We operate a fleet of 15 vehicles covering Jaipur, Ajmer, and Udaipur with 200+ retail touchpoints...",
  "message": "Interested in exclusive distribution rights for Rajasthan.",
  "submittedAt": "2024-01-15T10:30:00Z",
  "source": "website-distributor-form"
}
```

---

## 4. Client-Side Validation Rules

### Validation Behavior
1. **On submit**: Validate all required fields. If any fail, prevent submission and show errors.
2. **On blur** (optional enhancement): Validate individual fields when user tabs out.
3. **Error display**: Red border on field + error message text below the field.
4. **Error clearing**: Error clears when user starts typing in the errored field.

### Validation Functions

```typescript
// Email validation
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Phone validation (international)
function isValidPhone(phone: string): boolean {
  return /^[\+]?[\d\s\-\(\)]{7,20}$/.test(phone);
}

// Required field
function isRequired(value: string): boolean {
  return value.trim().length > 0;
}

// Min length
function minLength(value: string, min: number): boolean {
  return value.trim().length >= min;
}

// Max length
function maxLength(value: string, max: number): boolean {
  return value.trim().length <= max;
}
```

### Error Messages

| Validation | Error Message |
|---|---|
| Required field empty | `This field is required.` |
| Invalid email | `Please enter a valid email address.` |
| Invalid phone | `Please enter a valid phone number.` |
| Too short (name) | `Name must be at least 2 characters.` |
| No products selected | `Please select at least one product.` |
| No state selected | `Please select your state.` |
| Message too long | `Message cannot exceed 2000 characters.` |

---

## 5. Form UI States

### Default State
- Fields show placeholder text
- Labels are above fields
- Required fields have `*` indicator after label
- Submit button is enabled, forest-500 background

### Validation Error State
- Errored fields get `border-red-500` + `ring-red-500/30`
- Error message appears below field in `text-red-600 text-sm`
- Form scrolls to first error
- Submit button remains enabled

### Submitting State (Placeholder)
- Submit button shows "Submitting..." text
- Button gets `opacity-75 cursor-not-allowed`
- All fields become disabled
- After 2 seconds (simulated), reverts to success state

### Success State
- Form is replaced with a success card:
  - Green checkmark icon
  - Headline: "Inquiry Received!" or "Application Received!"
  - Body: Success message text
  - Subtle fade-in animation
- Background matches the form section dark background

---

## 6. Form Layout

### Desktop (lg+)
```
[Info Column (40%)]  [Form Column (60%)]
```

### Mobile
```
[Info Section]
[Form Section (full width)]
```

### Form Field Layout (within form column)
- Full width fields: Message, Network
- Half-width pairs (desktop): Name + Company, City + State, Email + Phone
- Product multi-select: Full width
- Submit button: Full width

```
[ Full Name          ] [ Company Name        ]
[ Country / City     ] [ State (if distrib.) ]
[ Business Email     ] [ Phone Number        ]
[ Products (multi)                           ]  ← export form only
[ Volume Requirements                       ]  ← export form only
[ Network Description                       ]  ← distributor form only
[ Message                                   ]
[            Submit Button                   ]
```

---

## 7. Accessibility Requirements

| Requirement | Implementation |
|---|---|
| Labels | Every `<input>` has a `<label>` with matching `for`/`id` |
| Required | `aria-required="true"` on required fields |
| Error state | `aria-invalid="true"` when validation fails |
| Error association | `aria-describedby` links to error message `<span>` |
| Focus management | On error, focus moves to first invalid field |
| Keyboard nav | Tab order follows visual layout |
| Screen readers | Success/error states announced via `role="alert"` |

### Example Accessible Field
```html
<div>
  <label for="fullName" class="...">
    Full Name <span class="text-red-500">*</span>
  </label>
  <input
    type="text"
    id="fullName"
    name="fullName"
    required
    aria-required="true"
    aria-invalid="false"
    aria-describedby="fullName-error"
    class="..."
    placeholder="e.g., John Smith"
  />
  <span id="fullName-error" class="text-red-600 text-sm hidden" role="alert">
    This field is required.
  </span>
</div>
```

---

## 8. Anti-Spam Considerations (Future)

When wiring to a backend, consider adding:

| Technique | Implementation |
|---|---|
| **Honeypot field** | Add a hidden field (`<input name="website" class="hidden">`). If filled, reject submission. |
| **Rate limiting** | Backend should rate-limit by IP (e.g., max 3 submissions per hour). |
| **CAPTCHA** | Consider hCaptcha or Cloudflare Turnstile (preferred since hosted on Cloudflare). |
| **Email validation** | Backend should validate email domain has MX records. |
| **Timestamp check** | Include a timestamp field; reject if form submitted in < 3 seconds (bot). |
