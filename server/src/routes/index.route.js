import todoRoute from "./todo.route.js";

export default (app) => {
    app.use('/todo', todoRoute);
}