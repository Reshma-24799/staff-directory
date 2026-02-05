# Staff Directory App

A clean, modern application to manage and view company employees. It features a public directory for viewing staff and a secured admin dashboard for managing the team.

## 🚀 Running Locally

1.  **Clone the repo** and navigate to the folder.
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Environment Setup**:
    Create a `.env.local` file in the root with your Supabase credentials:
    ```
    NEXT_PUBLIC_SUPABASE_URL=your_project_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
    ```
4.  **Run the development server**:
    ```bash
    npm run dev
    ```
5.  Open [http://localhost:3000](http://localhost:3000).

##  Architectural practices

*   **Server vs. Client boundaries**:
    Used Server Components for fetching data (fast, SEO-friendly) and used Client Components for interactivity.
    * *`app/admin/page.tsx` (Server) vs `components/Search.tsx` (Client).*

*   **URL as State**:
    Instead of using complex global state stores, used the URL to store search state. 
    * *Check `components/Search.tsx` to see how to sync inputs with URL params.*

*   **Component Organization**:
    Separated "dumb" UI components from "smart" feature components.
    * *`components/ui/` contains reusable shadcn/ui primitives.*
    * *`components/` contains business-logic-aware components like `AdminAlert`.*

## 📝 Trade-offs & Assumptions

*   **Direct Database Access**:
    Connected directly to Supabase from Server Components. In a larger app, it might be better to put this behind a strict API layer.

*   **Omitted Features**:
    *   **Pagination**: The list view loads all employees. A production app would need server-side pagination.



