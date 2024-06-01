import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const protectedRoutes = createRouteMatcher([
  "/",
  "/products",
  "/favourites",
  "/inbox",
  "/order-lists",
  "/product-stocks",
  "/profile",
]);

export default clerkMiddleware((auth, request) => {
  console.log(request);
  if (protectedRoutes(request)) {
    auth().protect();
  }
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
