# NewMotion Full-Stack Assignment

## Introduction
The assignment does not have a lot of technical implementation details. This is deliberately done to see how creative your solutions could be. If you require non-technical assistance in completing your assignment, you can send a request to programming-assignment@newmotion.com.

### Technology and language
This being a full-stack assignment, we expect you to master both front and backend. The backend API needs to be in GraphQL together with NodeJS and the frontend using React and your preferred styling flavor (SASS, LESS, Styled, etc... ). You are free to use whatever libraries you wish, granted you can justify the need.

Bonus points
- Functional Programming
- Clean, readable code

Let's keep things simple
For the sake of this assignment, storing data in-memory using plain collections is totally fine.

A note about datetimes
All datetime strings described in the assignment are to be represented in the format specified by RFC 3339. So both of these example datetime strings are valid:
2017-04-12T23:20:50Z
2018-01-19T16:39:57-08:00

*Submitting your solution*
When you are finished with your assignments, please include any relevant information needed to evaluate your work. The readme should include a run book,  JSON examples of response and request, available endpoints. Email your finished assignment to programming-assignment@newmotion.com, please do NOT publish your assignment or solution publicly.

### The assignment
TheVenerableInertia (TVI) is a company that earns profit by debiting customers for the usage of their electric vehicle (EV) charge points, i.e. charging sessions. In this assignment you shall implement a simple back-office system that computes what TVI will debit EV drivers for charging sessions. This tool can be used by administrators to set tariffs. In addition you will create a user interface for managing charge sessions.

The tariff (price) is compounded of three types of fees:
- Energy consumed (expressed in currency / kWh, e.g. EUR / kWh)
- Service fee (given as a number between 0.0 (exclusive) and 0.5 (inclusive))
- (OPTIONAL) Parking fee (expressed in currency / hour, e.g EUR / hour)

*Acceptance criteria*
- User should be able to submit a new tariff
    - Only one tariff can be active at any point in time
    - Tariff cannot be applied retroactively
    - Only tariff that starts in the future could be submitted

- User can start/stop a charge sessions
    - User can view charge sessions (duration, price, start & end timestamp)
    - User can filter & sort charge sessions
    - User can view ongoing sessions (duration, price, start timestamp)

*BONUS POINT*
How would you distinguish between users? What roles do you see? How would you implement it? Implementation is optional, we are more curious to see how you think.


## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
