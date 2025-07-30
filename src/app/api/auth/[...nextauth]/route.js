import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    providers:[
        CredentialsProvider({
            name:"facebook",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
              },

              async authorize(credentials,req){
                const user = { id: "1", name: "admin", email: "admin@admin.com" }
                if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    console.log(user)
                    return user
                  } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null
            
                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                  }
              }
        }),
      
    ],
    pages:{
      signIn: '/login',
      signOut: '/auth/signout',
      error: '/auth/error', // Error code passed in query string as ?error=
      verifyRequest: '/auth/verify-request', // (used for check email message)
      newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  
    }
})

export { handler as GET, handler as POST }