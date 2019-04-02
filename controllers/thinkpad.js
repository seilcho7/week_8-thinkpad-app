// Create
function create(req, res) {
    res.json({ message: "You created"});
}

// Retrieve
async function retrieveAll(req, res) {
    // const allThinkpads = await Thinkpad.getAll();
    res.json({ message: "You retrieved all"});
}

// Update
function update(req, res) {
    res.json({ message: "You updated"});
}

// Delete
function deleteOne(req, res) {
    res.json({ message: "You deleted"});
}

module.exports = {
    create,
    retrieveAll,
    update,
    deleteOne
};