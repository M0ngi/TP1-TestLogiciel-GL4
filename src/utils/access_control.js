const is_admin_access = (user) => {
    return ["admin", "manager", "moderator"].includes((user?.role ?? "").toLowerCase())
}

module.exports = {
    is_admin_access,
}