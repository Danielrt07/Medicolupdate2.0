# MediCol Style Guide

## Brand Colors

### Primary Colors
- **Primary Blue** `#2563EB`
  - Used for primary actions, links, and key highlights
  - Represents trust, professionalism, and medical expertise

### Secondary Colors
- **Light Blue** `#60A5FA`
  - Used for secondary elements and hover states
  - Creates a sense of calm and healing

### Neutral Colors
- **White** `#FFFFFF`
  - Primary background color
  - Creates clean, medical-grade aesthetic

- **Gray Scale**
  - Light Gray `#F9FAFB` - Background variations
  - Medium Gray `#6B7280` - Secondary text
  - Dark Gray `#111827` - Primary text

### Accent Colors
- **Success Green** `#10B981`
  - Used for success states and positive indicators
- **Warning Yellow** `#FBBF24`
  - Used for testimonial stars and cautionary elements
- **Error Red** `#EF4444`
  - Used sparingly for error states and important alerts

## Typography

### Headings
- **Font Family**: Playfair Display
- **Weights**: Regular (400), Bold (700)
- **Sizes**:
  - H1: `text-4xl md:text-5xl lg:text-6xl` (36px/48px/60px)
  - H2: `text-3xl md:text-4xl` (30px/36px)
  - H3: `text-xl md:text-2xl` (20px/24px)
  - H4: `text-lg md:text-xl` (18px/20px)

### Body Text
- **Font Family**: Inter
- **Weights**: Regular (400), Medium (500), Semi-Bold (600)
- **Sizes**:
  - Large: `text-lg` (18px)
  - Regular: `text-base` (16px)
  - Small: `text-sm` (14px)
  - Extra Small: `text-xs` (12px)

## Components

### Buttons
```jsx
// Primary Button
<button className="px-8 py-3 text-base font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors">
  Primary Action
</button>

// Secondary Button
<button className="px-8 py-3 text-base font-medium text-primary border-2 border-primary hover:bg-primary/10 rounded-lg transition-colors">
  Secondary Action
</button>
```

### Cards
```jsx
// Standard Card
<div className="bg-white p-6 rounded-xl shadow-sm">
  {/* Card content */}
</div>

// Feature Card
<div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
  {/* Card content */}
</div>
```

### Navigation
```jsx
// Nav Link
<Link className="hover:text-primary transition-colors">
  Nav Item
</Link>

// Active Nav Link
<Link className="text-primary font-medium">
  Active Item
</Link>
```

## Spacing System

### Container
- **Max Width**: 1280px
- **Padding**: `px-4`
```jsx
<div className="container mx-auto px-4">
  {/* Content */}
</div>
```

### Spacing Scale
- **Extra Small**: `space-x-2` (0.5rem, 8px)
- **Small**: `space-x-4` (1rem, 16px)
- **Medium**: `space-x-6` (1.5rem, 24px)
- **Large**: `space-x-8` (2rem, 32px)
- **Extra Large**: `space-x-12` (3rem, 48px)

## Grid System
```jsx
// Basic Grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Grid items */}
</div>

// Feature Grid
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {/* Feature items */}
</div>
```

## Images & Icons

### Logo Usage
- **Standard Size**: 32x32px for favicon
- **Header Size**: 40x40px
- **Minimum Clear Space**: 16px on all sides
- **File Format**: SVG preferred for scalability

### Icons
- **System**: Lucide Icons
- **Default Size**: 24x24px
- **Color**: Inherits text color or primary color
- **Usage**: 
  ```jsx
  <Icon className="w-6 h-6 text-primary" />
  ```

## Shadows
```css
/* Card Shadow */
shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);

/* Hover Shadow */
shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);

/* Modal Shadow */
shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
```

## Animations & Transitions
```css
/* Standard Transition */
transition-colors: 150ms ease;

/* Hover Transition */
transition-all: 200ms ease-in-out;

/* Menu Transition */
transition-transform: 300ms ease-in-out;
```

## Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1279px
- **Large Desktop**: ≥ 1280px

## Brand Voice & Tone
- **Professional** yet approachable
- **Confident** without being arrogant
- **Empathetic** and understanding
- **Clear** and direct communication
- **Premium** without being exclusive

## Accessibility
- Maintain WCAG 2.1 AA standards
- Minimum contrast ratio of 4.5:1 for text
- Interactive elements must have visible focus states
- All images require meaningful alt text
- Proper heading hierarchy (H1 → H6)

## Best Practices
1. Always use semantic HTML elements
2. Maintain consistent spacing and alignment
3. Use CSS Grid for layout structures
4. Implement responsive design patterns
5. Optimize images for performance
6. Follow accessibility guidelines
7. Keep code clean and well-documented 