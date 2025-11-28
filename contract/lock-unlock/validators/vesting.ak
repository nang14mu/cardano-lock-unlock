use aiken/collection/list
use aiken/crypto.{VerificationKeyHash}
use aiken/interval
use cardano/transaction.{OutputReference, Transaction}

pub type Datum {
  owner: VerificationKeyHash,
  beneficiary: VerificationKeyHash,
  lock_until: Int,
}

validator vesting {
  spend(
    datum_opt: Option<Datum>,
    _redeemer: Data,
    _input: OutputReference,
    tx: Transaction,
  ) {
    expect Some(datum) = datum_opt
    or {
      list.has(tx.extra_signatories, datum.owner),
      and {
        list.has(tx.extra_signatories, datum.beneficiary),
        interval.is_entirely_after(tx.validity_range, datum.lock_until),
      },
    }
  }

  else(_) {
    fail
  }
}

//owner=beneficiary
test vesting_example() {
  let datum =
    Datum {
      owner: #"00000000000000000000000000000000000000000000000000000000",
      beneficiary: #"00000000000000000000000000000000000000000000000000000000",
      lock_until: 1,
    }
  let redeemer = 1
  let input = OutputReference { transaction_id: "", output_index: 0 }
  vesting.spend(
    Some(datum),
    redeemer,
    input,
    Transaction { ..transaction.placeholder, extra_signatories: [datum.owner] },
  )
}
