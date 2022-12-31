import { rest } from "msw";

const baseURL = "https://d-rest-framework.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 2,
        username: "james",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 2,
        profile_image:
          "https://res.cloudinary.com/dylqwyatz/image/upload/v1/media/../default_profile_f7y9cq",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout`, (req,res,ctx) => {
    return res(ctx.status(200))
  })
];
