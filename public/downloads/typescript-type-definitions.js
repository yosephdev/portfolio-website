// TypeScript Type Definitions - JavaScript Version with JSDoc
// A comprehensive collection of type definitions for modern web development

/**
 * @typedef {'admin' | 'user' | 'moderator' | 'guest'} UserRole
 */

/**
 * @typedef {Object} NotificationSettings
 * @property {boolean} email
 * @property {boolean} push
 * @property {boolean} sms
 * @property {boolean} marketing
 */

/**
 * @typedef {Object} PrivacySettings
 * @property {'public' | 'private' | 'friends'} profileVisibility
 * @property {boolean} showEmail
 * @property {boolean} showActivity
 */

/**
 * @typedef {Object} UserPreferences
 * @property {'light' | 'dark' | 'system'} theme
 * @property {string} language
 * @property {NotificationSettings} notifications
 * @property {PrivacySettings} privacy
 */

/**
 * @typedef {Object} User
 * @property {string|number} id
 * @property {string} name
 * @property {string} email
 * @property {string} [avatar]
 * @property {boolean} isActive
 * @property {UserRole} role
 * @property {Date} createdAt
 * @property {Date} updatedAt
 * @property {UserPreferences} [preferences]
 */

/**
 * @typedef {Object} ApiError
 * @property {string} code
 * @property {string} message
 * @property {Object} [details]
 * @property {string} timestamp
 */

/**
 * @typedef {Object} PaginationMeta
 * @property {number} page
 * @property {number} limit
 * @property {number} total
 * @property {number} totalPages
 * @property {boolean} hasNext
 * @property {boolean} hasPrev
 */

/**
 * @typedef {Object} ResponseMeta
 * @property {string} timestamp
 * @property {string} requestId
 * @property {PaginationMeta} [pagination]
 */

/**
 * @typedef {Object} ApiResponse
 * @template T
 * @property {boolean} success
 * @property {T} [data]
 * @property {ApiError} [error]
 * @property {ResponseMeta} [meta]
 */

/**
 * @typedef {Object} PaginatedResponse
 * @template T
 * @property {boolean} success
 * @property {T[]} [data]
 * @property {ApiError} [error]
 * @property {ResponseMeta & {pagination: PaginationMeta}} meta
 */

/**
 * @typedef {Object} FormField
 * @template T
 * @property {T} value
 * @property {string} [error]
 * @property {boolean} touched
 * @property {boolean} [required]
 * @property {boolean} [disabled]
 */

/**
 * @typedef {Object} ValidationResult
 * @property {boolean} isValid
 * @property {Object.<string, string>} errors
 */

/**
 * @typedef {Object} BaseComponentProps
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 * @property {string} [id]
 * @property {string} [data-testid]
 */

/**
 * @typedef {Object} ButtonProps
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 * @property {string} [id]
 * @property {string} [data-testid]
 * @property {'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'} [variant]
 * @property {'sm' | 'md' | 'lg'} [size]
 * @property {boolean} [disabled]
 * @property {boolean} [loading]
 * @property {function(React.MouseEvent): void} [onClick]
 * @property {'button' | 'submit' | 'reset'} [type]
 * @property {React.ReactNode} [icon]
 */

/**
 * @typedef {Object} InputProps
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 * @property {string} [id]
 * @property {string} [data-testid]
 * @property {'text' | 'email' | 'password' | 'number' | 'tel' | 'url'} [type]
 * @property {string} [placeholder]
 * @property {string} [value]
 * @property {string} [defaultValue]
 * @property {function(React.ChangeEvent): void} [onChange]
 * @property {function(React.FocusEvent): void} [onBlur]
 * @property {boolean} [disabled]
 * @property {boolean} [required]
 * @property {string} [error]
 * @property {string} [label]
 * @property {string} [helperText]
 */

/**
 * @typedef {Object} ModalProps
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 * @property {string} [id]
 * @property {string} [data-testid]
 * @property {boolean} isOpen
 * @property {function(): void} onClose
 * @property {string} [title]
 * @property {'sm' | 'md' | 'lg' | 'xl' | 'full'} [size]
 * @property {boolean} [closeOnOverlayClick]
 * @property {boolean} [closeOnEscape]
 */

/**
 * @typedef {Object} SocialLinks
 * @property {string} [twitter]
 * @property {string} [github]
 * @property {string} [linkedin]
 * @property {string} [website]
 */

/**
 * @typedef {Object} Author
 * @property {string} id
 * @property {string} name
 * @property {string} [bio]
 * @property {string} [avatar]
 * @property {SocialLinks} [social]
 */

/**
 * @typedef {Object} Tag
 * @property {string} id
 * @property {string} name
 * @property {string} slug
 * @property {string} [color]
 */

/**
 * @typedef {Object} Category
 * @property {string} id
 * @property {string} name
 * @property {string} slug
 * @property {string} [description]
 * @property {string} [parent]
 */

/**
 * @typedef {Object} SEOData
 * @property {string} [title]
 * @property {string} [description]
 * @property {string[]} [keywords]
 * @property {string} [ogImage]
 * @property {string} [canonical]
 */

/**
 * @typedef {Object} BlogPost
 * @property {string} id
 * @property {string} title
 * @property {string} slug
 * @property {string} excerpt
 * @property {string} content
 * @property {Author} author
 * @property {Date} publishedAt
 * @property {Date} updatedAt
 * @property {Tag[]} tags
 * @property {Category[]} categories
 * @property {string} [featuredImage]
 * @property {number} readingTime
 * @property {'draft' | 'published' | 'archived'} status
 * @property {SEOData} seo
 */

/**
 * @typedef {Object} Technology
 * @property {string} name
 * @property {'frontend' | 'backend' | 'database' | 'devops' | 'design' | 'other'} category
 * @property {string} [icon]
 * @property {string} [color]
 */

/**
 * @typedef {Object} ProjectImage
 * @property {string} url
 * @property {string} alt
 * @property {string} [caption]
 * @property {boolean} [isPrimary]
 */

/**
 * @typedef {Object} ProjectLinks
 * @property {string} [live]
 * @property {string} [github]
 * @property {string} [demo]
 * @property {string} [documentation]
 */

/**
 * @typedef {'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled'} ProjectStatus
 */

/**
 * @typedef {'web-app' | 'mobile-app' | 'api' | 'library' | 'tool' | 'other'} ProjectCategory
 */

/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string} [longDescription]
 * @property {Technology[]} technologies
 * @property {ProjectImage[]} images
 * @property {ProjectLinks} links
 * @property {ProjectStatus} status
 * @property {boolean} featured
 * @property {Date} startDate
 * @property {Date} [endDate]
 * @property {string} [client]
 * @property {ProjectCategory} category
 */

/**
 * @typedef {Object} UseApiResult
 * @template T
 * @property {T|null} data
 * @property {boolean} loading
 * @property {string|null} error
 * @property {function(): Promise<void>} refetch
 */

/**
 * @typedef {Object} UseLocalStorageResult
 * @template T
 * @property {T} value
 * @property {function(T|function(T): T): void} setValue
 * @property {function(): void} removeValue
 */

/**
 * @typedef {Object} ThemeContextValue
 * @property {'light' | 'dark' | 'system'} theme
 * @property {function(string): void} setTheme
 * @property {boolean} isDark
 */

/**
 * @typedef {Object} LoginCredentials
 * @property {string} email
 * @property {string} password
 * @property {boolean} [rememberMe]
 */

/**
 * @typedef {Object} RegisterData
 * @property {string} name
 * @property {string} email
 * @property {string} password
 * @property {string} confirmPassword
 * @property {boolean} acceptTerms
 */

/**
 * @typedef {Object} AuthContextValue
 * @property {User|null} user
 * @property {boolean} isAuthenticated
 * @property {boolean} isLoading
 * @property {function(LoginCredentials): Promise<void>} login
 * @property {function(): Promise<void>} logout
 * @property {function(RegisterData): Promise<void>} register
 * @property {function(Partial<User>): Promise<void>} updateProfile
 */

// ============================================================================
// EXAMPLE USAGE WITH JSDOC
// ============================================================================

/**
 * Example API response
 * @type {ApiResponse<User>}
 */
const userResponse = {
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

/**
 * Example paginated response
 * @type {PaginatedResponse<BlogPost>}
 */
const postsResponse = {
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

/**
 * Example project data
 * @type {Project}
 */
const exampleProject = {
  id: "proj_1",
  title: "E-commerce Platform",
  description: "A modern e-commerce platform built with React and Node.js",
  longDescription: "A comprehensive e-commerce solution featuring user authentication, product catalog, shopping cart, payment processing, and admin dashboard.",
  technologies: [
    { name: "React", category: "frontend", icon: "react-icon", color: "#61DAFB" },
    { name: "Node.js", category: "backend", icon: "nodejs-icon", color: "#339933" },
    { name: "MongoDB", category: "database", icon: "mongodb-icon", color: "#47A248" }
  ],
  images: [
    { url: "/images/project1-main.jpg", alt: "Main dashboard", isPrimary: true },
    { url: "/images/project1-mobile.jpg", alt: "Mobile view" }
  ],
  links: {
    live: "https://example-ecommerce.com",
    github: "https://github.com/user/ecommerce-platform",
    demo: "https://demo.example-ecommerce.com"
  },
  status: "completed",
  featured: true,
  startDate: new Date("2023-01-01"),
  endDate: new Date("2023-06-01"),
  client: "Tech Startup Inc.",
  category: "web-app"
};

/**
 * Utility function to create API response
 * @template T
 * @param {T} data - The response data
 * @param {boolean} success - Whether the request was successful
 * @param {ApiError} [error] - Error information if request failed
 * @returns {ApiResponse<T>}
 */
function createApiResponse(data, success = true, error = null) {
  return {
    success,
    data: success ? data : undefined,
    error: error,
    meta: {
      timestamp: new Date().toISOString(),
      requestId: `req_${Date.now()}`
    }
  }
}
