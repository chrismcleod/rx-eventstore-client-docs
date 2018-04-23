export default [ `
const pong1$ = client.ping();
pong1$.subscribe(() => {
  console.log('first ping ponged')
});

const pong2$ = client.ping()
pong2$.subscribe(() => {
  console.log('second ping ponged')
});

`, `

const subscription$ = client.connectToPersistentSubscription({...});

persistentStream.onComplete.subscribe( confirm => {
  console.log('Subscription confirmation data', confirmation)
});

persistentStream.onEvent.subscribe( event => {
  console.log('Received an incoming event', event)
});


const event$ = client.catchup({...});

eventStream.onComplete.subscribe( confirmation => {
  console.log('Subscription confirmation data', confirmation)
});

eventStream.onEvent.subscribe( event => {
  console.log('Received an incoming event', event)
});
`,
];
