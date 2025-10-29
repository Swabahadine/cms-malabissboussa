import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::order.order",
  ({ strapi }) => ({
    async create(ctx) {
      const { data } = ctx.request.body;

      if (!data.paypalId || !data.orderStatus) {
        return ctx.badRequest("Paypal ID et status sont requis");
      }

      // Vérifie que le status est bien COMPLETED
      if (data.orderStatus !== "COMPLETED") {
        return ctx.badRequest("Paiement non validé");
      }

      // Crée la commande
      const order = await strapi.entityService.create("api::order.order", {
        data: {
          ...data,
          createdAt: new Date(),
        },
      });

      return { ok: true, order };
    },
  })
);
