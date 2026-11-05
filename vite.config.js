import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace the value below with "/YOUR-REPOSITORY-NAME/" for a project repository.
// If you publish from a repository named YOUR-USERNAME.github.io, use "/".
export default defineConfig({
  plugins: [react()],
  base: '/samuel-owolabi-ml-portfolio/'
})