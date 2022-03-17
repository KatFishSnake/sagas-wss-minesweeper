## 💣 Mini MineSweeper Game 💣
![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=sagas-wss-minesweeper.vercel.app)

A fun little attempt at building minesweeper game around public api

Take a look: [🔗 link](https://sagas-wss-minesweeper.vercel.app)

### Getting started
- Pull the lib down
- `yarn` in the directory to setup the bundle
- `yarn start`

### Complexities
- It was definatelly a challenge to deal with Sagas on top of the websocket, in a hindsight probably should have done sagas first then added the socket on top of already functional ssytem
- The size of the data was the second most challenging thing

### Questions
- Is it possible to make the map returned by the socket smaller, i think it might be better UX vise

### ⚙️ Technologies used
- React
- Material-ui using css-in-js solution provided by the library
- TypeScript
- Redux + Redux-saga + Redux Toolkit on top of Websocket

### 🚧 Under development (unoptimized) 🚧
- [ ] States: `win`, `loose`
- [ ] Optimization: Better performance (much better)
- [ ] Better virtualization UX
- [ ] More tests
- [ ] CSS variables
- [ ] Unbundle from react-scripts to make it a proper app
- [ ] Proper mobile
