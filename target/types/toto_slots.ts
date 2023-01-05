export type TotoSlots = {
  "version": "0.1.0",
  "name": "toto_slots",
  "instructions": [
    {
      "name": "initSlotAccount",
      "accounts": [
        {
          "name": "slotAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "updateSlotData",
      "accounts": [
        {
          "name": "slotAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "uid",
          "type": "string"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "email",
          "type": "string"
        },
        {
          "name": "slots",
          "type": {
            "array": [
              {
                "array": [
                  "u8",
                  6
                ]
              },
              10
            ]
          }
        },
        {
          "name": "time",
          "type": "string"
        },
        {
          "name": "dataAccountAddress",
          "type": "string"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "slotAccountData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "uid",
            "type": "string"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "email",
            "type": "string"
          },
          {
            "name": "slots",
            "type": {
              "array": [
                {
                  "array": [
                    "u8",
                    6
                  ]
                },
                10
              ]
            }
          },
          {
            "name": "time",
            "type": "string"
          },
          {
            "name": "dataAccountAddress",
            "type": "string"
          },
          {
            "name": "owner",
            "type": "publicKey"
          }
        ]
      }
    }
  ]
};

export const IDL: TotoSlots = {
  "version": "0.1.0",
  "name": "toto_slots",
  "instructions": [
    {
      "name": "initSlotAccount",
      "accounts": [
        {
          "name": "slotAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "updateSlotData",
      "accounts": [
        {
          "name": "slotAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "uid",
          "type": "string"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "email",
          "type": "string"
        },
        {
          "name": "slots",
          "type": {
            "array": [
              {
                "array": [
                  "u8",
                  6
                ]
              },
              10
            ]
          }
        },
        {
          "name": "time",
          "type": "string"
        },
        {
          "name": "dataAccountAddress",
          "type": "string"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "slotAccountData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "uid",
            "type": "string"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "email",
            "type": "string"
          },
          {
            "name": "slots",
            "type": {
              "array": [
                {
                  "array": [
                    "u8",
                    6
                  ]
                },
                10
              ]
            }
          },
          {
            "name": "time",
            "type": "string"
          },
          {
            "name": "dataAccountAddress",
            "type": "string"
          },
          {
            "name": "owner",
            "type": "publicKey"
          }
        ]
      }
    }
  ]
};
