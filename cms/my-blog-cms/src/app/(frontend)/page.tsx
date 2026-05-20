import React from 'react'

export default function HomePage() {
  return (
    <main style={{ fontFamily: 'system-ui', padding: 48, maxWidth: 640 }}>
      <h1>AMG Blog CMS</h1>
      <p>
        Admin: <a href="/admin">/admin</a>
      </p>
      <p>
        REST API: <a href="/api/posts">/api/posts</a>
      </p>
    </main>
  )
}
