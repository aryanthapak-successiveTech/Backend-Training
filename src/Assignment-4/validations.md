# Validation

## What Is Validation?

Validation refers to the process of checking user input or system data to confirm it conforms to expected formats, types, or values. It can be broadly categorized into:

Client-side validation: Performed in the browser before data is sent to the server.

Server-side validation: Performed on the server after data is received.

Client-side validation improves user experience, but server-side validation is essential for security.

## Types of Validation

### Format Validation

Ensures input follows a specific format (e.g., email, phone number).

### Type Checking

Verifies the data is of an expected type (e.g., integer, string).

### Length Checking

Prevents excessively long inputs, often used to avoid buffer overflows.

### Whitelist Validation

Accepts only explicitly allowed values (preferred over blacklist).

### Range Checking

Ensures numeric values fall within a safe range.

### Business Rule Validation

Enforces application-specific rules (e.g., age must be over 18).

## Security Risks of Improper Validation

Failing to validate input properly can lead to:

### SQL Injection

Attackers inject SQL queries via form fields.

### Cross-site Scripting (XSS)

Malicious scripts are executed in the victim’s browser.

### Remote Code Execution (RCE)

Input is used in functions like eval() or passed to system commands.

### Authentication Bypass

Manipulated inputs may allow unauthorized access.

### Denial of Service (DoS)

Resource exhaustion through malformed or excessive input.

## Best Practices for Validation

Never trust user input. Always validate and sanitize.

Validate on the server-side, even if client-side validation is implemented.

Use built-in frameworks and libraries that provide strong validation functions.

Prefer whitelisting over blacklisting.
