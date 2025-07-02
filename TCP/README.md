# M02W05 - Networking with TCP

### To Do

- [ ] Discuss networking and the need for protocols
- [ ] TCP introduction
- [ ] TCP demo

## Networking

- LAN - Local Area Network
- That is a connection between computers and they talk to one another
  - The internet is like a GAINT LAN CONNECTION
  - The internet that we use is just a routing system between 2 locations
  - With an internet connection we always have to connect to a computer or a server of some kind
  - A server is a computer that host a connection
  - A server doesn't need to maintain a connection

## IP Address

- If the internet is like a city or a country the ip address is your location in that city
- Everyone has an IP Address and it's unique
  IPv4 address 123.113.8.8
  - the issue is that we are running out of number
  - 256 , 256 , 256 , 256
    IPv6
  - released in 2017
  - has 128bits
  - 2001:0se2:0000:0000:0000:7hs2:9sj2:0000

## PORT

- port is a unique number 1 - 65k
- zoom call is on port 5000
- chrome is on port 62000
- spotify is on port 1230
- apple music is on port 4500

- Everytime you make a connection to a server you need 2 things an ip address and a port

- In server development you can pick between ports 3000 - 10000

### TCP

- Transmission control Protocol
  - Controls how 2 computers talk / connect
  - Secures
  - Guarantees
    - Step one: Computer A is gonna send a request to computer B
    - Step two: Computer B is gonna agree to the connection
    - Step three: Computer A knows that computer B Agrees and a connection is made

## Event Driven Programming

```js
// Whenever an event happens - run the code in your callback
server.listen(PORT, () => {
  console.log('Your server is on! Listening at port ' + PORT);
});
```
