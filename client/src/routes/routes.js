export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>Header</h1>
          <nav>
            <ul>
              <li>
                <a href={`/`}>Home</a>
              </li>
              <li>
                <a href={`/login`}>Sign In</a>
              </li>
              <li>
                <a href={`/register`}>Sign Up</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail"></div>
      </>
    );
  }