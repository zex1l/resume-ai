import { convexAuth } from '@convex-dev/auth/server';
import { Password } from '@convex-dev/auth/providers/Password';

export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [
    Password({
      id: 'password',
      profile(params, _ctx) {
        return {
          email: params.email as string,
          name: params.name as string,
        };
      },
    }),
  ],
});
