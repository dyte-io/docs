---
sidebar_position: 9
web_core_version: 1.2.0
---

<!-- Auto Generated Below -->

<a name="module_DytePolls"></a>

The DytePolls module consists of the polls that have been created in the
meeting.

- [DytePolls](#module_DytePolls)
  - [.items](#module_DytePolls+items)
  - [.create(question, options, anonymous, hideVotes)](#module_DytePolls+create)
  - [.vote(pollId, index)](#module_DytePolls+vote)

<a name="module_DytePolls+items"></a>

### meeting.polls.items

An array of poll items.

**Kind**: instance property of [<code>DytePolls</code>](#module_DytePolls)  
<a name="module_DytePolls+create"></a>

### meeting.polls.create(question, options, anonymous, hideVotes)

Creates a poll in the meeting.

**Kind**: instance method of [<code>DytePolls</code>](#module_DytePolls)

| Param     | Default            | Description                                |
| --------- | ------------------ | ------------------------------------------ |
| question  |                    | The question that is to be voted for.      |
| options   |                    | The options of the poll.                   |
| anonymous | <code>false</code> | If true, the poll votes are anonymous.     |
| hideVotes | <code>false</code> | If true, the votes on the poll are hidden. |

<a name="module_DytePolls+vote"></a>

### meeting.polls.vote(pollId, index)

Casts a vote on an existing poll.

**Kind**: instance method of [<code>DytePolls</code>](#module_DytePolls)

| Param  | Description                                |
| ------ | ------------------------------------------ |
| pollId | The ID of the poll that is to be voted on. |
| index  | The index of the option.                   |
