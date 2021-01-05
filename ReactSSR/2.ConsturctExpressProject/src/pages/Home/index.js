import React, { useState } from 'react'

import styles from './index.css'

console.log('//////', styles)
const App = function Home(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
        <p>Hello, React Component</p>
        {/* className={styles.addBtn} */}
        <button className={styles.addBtn} onClick={ () => setCount(count + 1) }>Click, current Value: { count }</button>
    </div>
  )
}

export default App;

// export default  withStyles(styles)(App);