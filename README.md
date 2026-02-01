# oldStorage

localStorage with automatic expiration. Set key-value pairs with a time-to-live, get them back or null if expired.

## Installation

```bash
npm install oldstorage
```

## Usage

```javascript
const { expireIn, isExpired, HOUR, DAY } = require('oldstorage');

// Store a value that expires in 1 hour
expireIn('authToken', 'abc123', HOUR);

// Get the value (returns null if expired)
const token = isExpired('authToken');
console.log(token); // 'abc123' or null if expired
```

## API

### `expireIn(key, value, ttl)`

Store a value in localStorage with an expiration time.

- `key` - Storage key (string)
- `value` - Value to store (any JSON-serializable value)
- `expirationtime` - Time to live in milliseconds (number)

```javascript
expireIn('user', { name: 'John' }, HOUR);
```

### `isExpired(key)`

Retrieve a value from localStorage. Returns `null` if the item doesn't exist or has expired.

- `key` - Storage key (string)
- Returns: The stored value or `null`

```javascript
const user = isExpired('user');
```

## Time Constants

Pre-defined constants for common durations:

```javascript
MINUTE  // 60000ms (1 minute)
HOUR    // 3600000ms (1 hour)
HOUR2   // 7200000ms (2 hours)
HOUR3   // 10800000ms (3 hours)
// ... up to HOUR23
DAY     // 86400000ms (24 hours)
```

### Usage

```javascript
const { expireIn, MINUTE, HOUR5, DAY } = require('oldstorage');

expireIn('quickCache', data, MINUTE);      // Expires in 1 minute
expireIn('sessionData', data, HOUR5);      // Expires in 5 hours
expireIn('userPrefs', data, DAY);          // Expires in 1 day
expireIn('custom', data, 5000);            // Expires in 5 seconds (custom ms)
```

## Use Cases

- **API response caching** - Cache API responses for a few minutes
- **Authentication tokens** - Store JWT tokens that auto-expire
- **Form data** - Temporarily save form progress
- **Feature flags** - Cache remote config with TTL
- **User preferences** - Store settings that refresh daily
- **Rate limiting** - Track user actions with expiration

## Example

```javascript
const { expireIn, isExpired, HOUR } = require('oldstorage');

// Store API response
async function fetchUserData(userId) {
  const cached = isExpired(`user-${userId}`);
  if (cached) return cached;
  
  const data = await api.getUser(userId);
  expireIn(`user-${userId}`, data, HOUR);
  return data;
}
```

## License

MIT