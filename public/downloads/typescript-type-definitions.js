// TypeScript Type Definitions

// User object
type User = {
  id: number;
  name: string;
  email?: string;
  isActive: boolean;
};

// API response wrapper
interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
}

// Example usage
const userResponse: ApiResponse<User> = {
  success: true,
  data: {
    id: 1,
    name: "Alice",
    isActive: true
  }
};
