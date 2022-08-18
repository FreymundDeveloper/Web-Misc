export default function handler(req, res) {
    const codigo = req.query.codigo
    res.status(200).json({
        id: codigo,
        nome: `Ma ${codigo}`,
        email: `mamama${codigo}@gmail.com`
    })
}