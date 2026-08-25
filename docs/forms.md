# Surya Foods — Form Specifications

> **Purpose**: Complete specification for all lead generation forms on the website. AI agents should reference this when building, modifying, or debugging forms. Backend integration engineers should use this as their API contract reference.

---

## 1. Form Overview

| Form | Page | Form ID | Purpose | Anchor |
|---|---|---|---|---|
| Export Inquiry | `/global-exports` | `export-inquiry-form` | International broker lead capture | `#inquiry-form` |
| 048 Brand Partnership | `/048-brand` | `brand-inquiry-form` | Export and India partner lead capture | `#brand-inquiry` |
| 048 Product Enquiry | `/048-brand/:slug` | `product-inquiry-form` | Product-specific distribution and buyer lead capture | `#product-inquiry` |

### Current State
- Forms include client-side validation and submit JSON to `/api/contact`.
- The contact API sends admin and customer emails through AWS SES when credentials are configured and simulates success during local development.
- Product detail forms include a hidden `productInterest` value so enquiries are routed with the selected 048 product.

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

## 3. 048 Brand Partnership Form

### Form Metadata
| Property | Value |
|---|---|
| **Form ID** | `brand-inquiry-form` |
| **Form Name** | 048 Brand Partnership |
| **Method** | POST |
| **Action** | `/api/contact` (JSON POST via client-side handler) |
| **Submit Button Text** | Request 048 Catalogue |
| **Success Message** | Thank you! Our business team will review your 048 enquiry and contact you within 24 business hours. |

### Field Specifications

| Field Name | HTML Name | Type | Label | Placeholder | Required | Validation Rules |
|---|---|---|---|---|---|---|
| Full Name | `fullName` | `text` | Full Name | `e.g., Rajesh Kumar` | ✅ | Min 2 chars, max 100 |
| Company / Business Name | `companyName` | `text` | Company / Business Name | `e.g., Gulf Foods Trading LLC` | ✅ | Min 2 chars |
| Country / State | `country` | `text` | Country / State | `e.g., UAE or Maharashtra, India` | ✅ | Min 2 chars |
| Partnership Type | `partnerType` | `select` | Partnership Type | `Select partnership type` | ✅ | Must select a value |
| Business Email | `email` | `email` | Business Email | `e.g., rajesh@company.com` | ✅ | Valid email format |
| Phone Number | `phone` | `tel` | Phone Number | `e.g., +91-XXXXXXXXXX` | ✅ | Min 10 chars, Indian phone format |
| Expected Order Volume | `volume` | `text` | Expected Order Volume | `e.g., 1 container monthly or 50 MT` | ❌ | Free text |
| Message | `message` | `textarea` | Additional Message | Product, pack size and destination requirements | ❌ | Free text |

### Partnership Type Options
- International Importer
- Overseas Distributor
- India Distributor
- Wholesale Buyer
- Retail / HoReCa Buyer

### Expected JSON Payload (for backend integration)
```json
{
  "formType": "brand",
  "fullName": "John Smith",
  "companyName": "Gulf Foods Trading LLC",
  "country": "United Arab Emirates",
  "partnerType": "International Importer",
  "email": "john@company.com",
  "phone": "+971-50-1234567",
  "volume": "1 container monthly",
  "message": "Interested in the XXXL Supreme and Signature XXL range.",
  "source": "/048-brand"
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
