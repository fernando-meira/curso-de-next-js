import { Title } from "../styles/pages/Home";

export default function NotFound() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: '100vh' }}>
      <Title>Page not found</Title>

      <h1>Are you lost?</h1>
    </div>
  )
}