import { signIn, signOut, useSession } from 'next-auth/client'

export default function Page() {
  const [session, loading] = useSession()

  return (
    <div>
      {!session && (
        <p>
          <span>Not signed in</span>
          <br />
          <button onClick={() => signIn()}>Sign in</button>
        </p>
      )}
      {session && (
        <p>
          <span>Signed in as {session.user.email}</span>
          <br />
          <button onClick={() => signOut()}>Sign out</button>
        </p>
      )}
    </div>
  )
}
