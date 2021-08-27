export const report = () => (next) => (action) => {
    try {
        return next(action)
    }
    catch (e){
        console.error("some error:", e)
    }
}
