const jwtSecret = process.env.SECRET || 'secret';

const USER_STATUS = {
  APPROVED: 'APPROVED',
  PENDING: 'PENDING',
  DECLINED: 'DECLINED',
  INPROGRESS: 'INPROGRESS'
}
const USER_TRANSACTION_STATUS = {
  APPROVED: 'APPROVED',
  PENDING: 'PENDING',
  DECLINED: 'DECLINED',
  INPROGRESS: 'INPROGRESS'
}
const FIERCE_PAYMENT_STATUS = {
  "FAILED": "Failed",
  "PENDING": "Pending",
  "COMPLETE": "Complete",
  "APPROVED": "Approved",
  "REJECTED": "Rejected",
  "REVIEW": "Review",
  "DECLINED": "Declined",
  "CANCELED": "Canceled",
  "PROCESSING": "Processing"
}
const FIERCE_TRANSACTION_TYPE = {
  "BUY": "BUY",
  "SELL": "SELL",
}

const PAYMENT_STATUS = {
  PENDING: 'PENDING',
  PAID: 'PAID',
}

const COIN_NETWORK_TYPE = {
  MAIN_NET: 'MAIN_NET',
  TEST_NET: 'TEST_NET',
}

const PRICE_SETTINGS = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
}

const SR_ADDRESS = "0x310cB7B1700947F25f75080b138E65aAf0729a75";
const RED_ADDRESS = "0xAeE3C92D4FCFd25D88AE2465A9736B00884319c6";
const USDC_ADDRESS = "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359";

export {
  SR_ADDRESS,
  USDC_ADDRESS,
  RED_ADDRESS,
  USER_STATUS,
  jwtSecret,
  PAYMENT_STATUS,
  PRICE_SETTINGS,
  COIN_NETWORK_TYPE,
  FIERCE_PAYMENT_STATUS,
  FIERCE_TRANSACTION_TYPE,
  USER_TRANSACTION_STATUS
};
