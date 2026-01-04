const { Coffee } = require('../models') // เรียกใช้ Model Coffee

module.exports = {
    // GET /coffees → ดูเมนูทั้งหมด
    async findAll (req, res) {
        try {
            const coffees = await Coffee.findAll()
            res.send(coffees)
        } catch (err) {
            res.status(500).send({ error: 'ดึงข้อมูลไม่สำเร็จ' })
        }
    },

    // POST /coffee → เพิ่มเมนูใหม่
    async create (req, res) {
        try {
            const coffee = await Coffee.create(req.body)
            res.send(coffee)
        } catch (err) {
            res.status(500).send({ error: 'สร้างเมนูไม่สำเร็จ' })
        }
    },

    // GET /coffee/:id → ดูเมนูตาม ID
    async findById (req, res) {
        try {
            const coffee = await Coffee.findByPk(req.params.id)
            if (!coffee) {
                return res.status(404).send({ error: 'ไม่พบเมนูนี้' })
            }
            res.send(coffee)
        } catch (err) {
            res.status(500).send({ error: 'หาข้อมูลไม่เจอ' })
        }
    },

    // PUT /coffee/:id → แก้ไขเมนู
    async update (req, res) {
        try {
            const [updated] = await Coffee.update(req.body, {
                where: { id: req.params.id }
            })

            if (!updated) {
                return res.status(404).send({ error: 'ไม่พบเมนูนี้' })
            }

            const coffee = await Coffee.findByPk(req.params.id)
            res.send(coffee)
        } catch (err) {
            res.status(500).send({ error: 'แก้ไขไม่สำเร็จ' })
        }
    },

    // DELETE /coffee/:id → ลบเมนู
    async remove (req, res) {
        try {
            const coffee = await Coffee.findByPk(req.params.id)
            if (!coffee) {
                return res.status(404).send({ error: 'ไม่มีเมนูนี้' })
            }
            await coffee.destroy()
            res.send(coffee)
        } catch (err) {
            res.status(500).send({ error: 'ลบไม่สำเร็จ' })
        }
    }
}
