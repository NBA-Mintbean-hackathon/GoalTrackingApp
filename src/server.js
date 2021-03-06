import { belongsTo, createServer, Factory, hasMany, Model } from "miragejs";

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model.extend({
        tasks: hasMany(),
      }),

      task: Model.extend({
        user: belongsTo(),
      }),
    },

    factories: {
      user: Factory.extend({
        email(i) {
          return `mail${i + 1}@mail.com`;
        },

        password: "pass123",
      }),

      task: Factory.extend({
        title(i) {
          return `Title ${i + 1}`;
        },

        body(i) {
          return `Body ${i + 1}`;
        },

        category: "personal",

        status: "todo",

        userId: 1,
      }),
    },

    routes() {
      this.namespace = "api";

      this.get("/users");

      this.get("/users/:id");

      this.get("/users/:id/tasks", (schema, request) => {
        let user = schema.users.find(request.params.id);

        return user.tasks;
      });

      this.get("/tasks");
    },

    seeds(server) {
      server.create("user");
      server.create("user");
      server.create("user");
      server.create("task", { status: 'done', category: "career" });
      server.create("task", { status: 'inprogress', category: "health" });
      server.create("task", { status: 'todo', category: "social" });
      server.create("task", { status: 'todo', category: "personal" });
      server.create("task", { status: 'todo', category: "health" });
      server.create("task", { status: 'inprogress', category: "personal" });
      server.create("task", { status: 'todo', category: "career" });
      server.create("task", { status: 'todo', category: "social" });

      server.create("task", { userId: 2 });
      server.create("task", { userId: 3 });
      server.create("task", { userId: 2 });

      server.db.dump();
    },
  });

  return server;
}
