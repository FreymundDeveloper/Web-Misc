import Layout from "../components/Layout";

export default function Home() {
  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-violet-500 to-blue-500
      text-white
    `}>
      <Layout titulo='Cadastro'>
        <span>Content</span>
      </Layout>
    </div>
  )
}
