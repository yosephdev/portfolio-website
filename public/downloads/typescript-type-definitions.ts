// TypeScript Type Definitions - Enhanced Version
// A comprehensive collection of TypeScript types for modern web development

// ============================================================================
// BASIC TYPES & UTILITIES
// ============================================================================

// User Management Types
interface User {
  id: string | number;
  name: string;
  email: string;
  avatar?: string;
  isActive: boolean;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
  preferences?: UserPreferences;
}

type UserRole = 'admin' | 'user' | 'moderator' | 'guest';

interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  language: string;
  notifications: NotificationSettings;
  privacy: PrivacySettings;
}

interface NotificationSettings {
  email: boolean;
  push: boolean;
  sms: boolean;
  marketing: boolean;
}

interface PrivacySettings {
  profileVisibility: 'public' | 'private' | 'friends';
  showEmail: boolean;
  showActivity: boolean;
}

// ============================================================================
// API RESPONSE TYPES
// ============================================================================

// Generic API Response wrapper with better error handling
interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: ApiError;
  meta?: ResponseMeta;
}

interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
  timestamp: string;
}

interface ResponseMeta {
  timestamp: string;
  requestId: string;
  pagination?: PaginationMeta;
}

interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

// Paginated response type
interface PaginatedResponse<T> extends ApiResponse<T[]> {
  meta: ResponseMeta & {
    pagination: PaginationMeta;
  };
}

// ============================================================================
// FORM & VALIDATION TYPES
// ============================================================================

// Form field types
interface FormField<T = string> {
  value: T;
  error?: string;
  touched: boolean;
  required?: boolean;
  disabled?: boolean;
}

// Generic form state
type FormState<T extends Record<string, unknown>> = {
  [K in keyof T]: FormField<T[K]>;
} & {
  isSubmitting: boolean;
  isValid: boolean;
  errors: Partial<Record<keyof T, string>>;
};

// Validation result
interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

// ============================================================================
// COMPONENT PROPS TYPES
// ============================================================================

// Common component props
interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  'data-testid'?: string;
}

// Button component props
interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
}

// Input component props
interface InputProps extends BaseComponentProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  label?: string;
  helperText?: string;
}

// Modal component props
interface ModalProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
}

// ============================================================================
// BLOG & CONTENT TYPES
// ============================================================================

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: Author;
  publishedAt: Date;
  updatedAt: Date;
  tags: Tag[];
  categories: Category[];
  featuredImage?: string;
  readingTime: number;
  status: 'draft' | 'published' | 'archived';
  seo: SEOData;
}

interface Author {
  id: string;
  name: string;
  bio?: string;
  avatar?: string;
  social?: SocialLinks;
}

interface Tag {
  id: string;
  name: string;
  slug: string;
  color?: string;
}

interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  parent?: string;
}

interface SEOData {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

interface SocialLinks {
  twitter?: string;
  github?: string;
  linkedin?: string;
  website?: string;
}

// ============================================================================
// PROJECT & PORTFOLIO TYPES
// ============================================================================

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: Technology[];
  images: ProjectImage[];
  links: ProjectLinks;
  status: ProjectStatus;
  featured: boolean;
  startDate: Date;
  endDate?: Date;
  client?: string;
  category: ProjectCategory;
}

interface Technology {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'design' | 'other';
  icon?: string;
  color?: string;
}

interface ProjectImage {
  url: string;
  alt: string;
  caption?: string;
  isPrimary?: boolean;
}

interface ProjectLinks {
  live?: string;
  github?: string;
  demo?: string;
  documentation?: string;
}

type ProjectStatus = 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled';
type ProjectCategory = 'web-app' | 'mobile-app' | 'api' | 'library' | 'tool' | 'other';

// ============================================================================
// UTILITY TYPES
// ============================================================================

// Make all properties optional recursively
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// Make specific properties required
type RequireFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

// Extract function parameters
type Parameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never;

// Create a type with only specific keys
type PickByType<T, U> = {
  [K in keyof T as T[K] extends U ? K : never]: T[K];
};

// Async function return type
type AsyncReturnType<T extends (...args: any[]) => Promise<any>> = T extends (...args: any[]) => Promise<infer R> ? R : any;

// ============================================================================
// HOOK TYPES
// ============================================================================

// Custom hook return types
interface UseApiResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

interface UseFormResult<T extends Record<string, unknown>> {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  touched: Partial<Record<keyof T, boolean>>;
  isSubmitting: boolean;
  isValid: boolean;
  handleChange: (field: keyof T) => (value: T[keyof T]) => void;
  handleBlur: (field: keyof T) => () => void;
  handleSubmit: (onSubmit: (values: T) => void | Promise<void>) => (event: React.FormEvent) => void;
  reset: () => void;
  setFieldValue: (field: keyof T, value: T[keyof T]) => void;
  setFieldError: (field: keyof T, error: string) => void;
}

interface UseLocalStorageResult<T> {
  value: T;
  setValue: (value: T | ((prev: T) => T)) => void;
  removeValue: () => void;
}

// ============================================================================
// CONTEXT TYPES
// ============================================================================

interface ThemeContextValue {
  theme: 'light' | 'dark' | 'system';
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  isDark: boolean;
}

interface AuthContextValue {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => Promise<void>;
  register: (userData: RegisterData) => Promise<void>;
  updateProfile: (data: Partial<User>) => Promise<void>;
}

interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

// ============================================================================
// EXAMPLE USAGE
// ============================================================================

// Example API response
const userResponse: ApiResponse<User> = {
  success: true,
  data: {
    id: "1",
    name: "Alice Johnson",
    email: "alice@example.com",
    avatar: "https://example.com/avatar.jpg",
    isActive: true,
    role: "user",
    createdAt: new Date("2023-01-01"),
    updatedAt: new Date("2023-12-01"),
    preferences: {
      theme: "dark",
      language: "en",
      notifications: {
        email: true,
        push: false,
        sms: false,
        marketing: false
      },
      privacy: {
        profileVisibility: "public",
        showEmail: false,
        showActivity: true
      }
    }
  },
  meta: {
    timestamp: new Date().toISOString(),
    requestId: "req_123456789"
  }
};

// Example paginated response
const postsResponse: PaginatedResponse<BlogPost> = {
  success: true,
  data: [
    {
      id: "post_1",
      title: "Getting Started with TypeScript",
      slug: "getting-started-typescript",
      excerpt: "Learn the basics of TypeScript...",
      content: "Full content here...",
      author: {
        id: "author_1",
        name: "John Doe",
        bio: "Software Developer",
        avatar: "https://example.com/john.jpg"
      },
      publishedAt: new Date("2023-12-01"),
      updatedAt: new Date("2023-12-01"),
      tags: [
        { id: "tag_1", name: "TypeScript", slug: "typescript", color: "#3178c6" }
      ],
      categories: [
        { id: "cat_1", name: "Programming", slug: "programming" }
      ],
      readingTime: 5,
      status: "published",
      seo: {
        title: "Getting Started with TypeScript - Complete Guide",
        description: "Learn TypeScript from scratch with practical examples",
        keywords: ["typescript", "javascript", "programming"]
      }
    }
  ],
  meta: {
    timestamp: new Date().toISOString(),
    requestId: "req_987654321",
    pagination: {
      page: 1,
      limit: 10,
      total: 25,
      totalPages: 3,
      hasNext: true,
      hasPrev: false
    }
  }
};

// Example form usage
type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const contactForm: FormState<ContactFormData> = {
  name: { value: "", touched: false, required: true },
  email: { value: "", touched: false, required: true },
  message: { value: "", touched: false, required: true },
  isSubmitting: false,
  isValid: false,
  errors: {}
};

// Export all types for use in other files
export type {
  // Basic types
  User,
  UserRole,
  UserPreferences,
  NotificationSettings,
  PrivacySettings,
  
  // API types
  ApiResponse,
  ApiError,
  ResponseMeta,
  PaginationMeta,
  PaginatedResponse,
  
  // Form types
  FormField,
  FormState,
  ValidationResult,
  
  // Component types
  BaseComponentProps,
  ButtonProps,
  InputProps,
  ModalProps,
  
  // Content types
  BlogPost,
  Author,
  Tag,
  Category,
  SEOData,
  SocialLinks,
  
  // Project types
  Project,
  Technology,
  ProjectImage,
  ProjectLinks,
  ProjectStatus,
  ProjectCategory,
  
  // Utility types
  DeepPartial,
  RequireFields,
  PickByType,
  AsyncReturnType,
  
  // Hook types
  UseApiResult,
  UseFormResult,
  UseLocalStorageResult,
  
  // Context types
  ThemeContextValue,
  AuthContextValue,
  LoginCredentials,
  RegisterData
};