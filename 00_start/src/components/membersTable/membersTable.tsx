import * as React from 'react'
import { MemberEntity } from '../../model/member'
import { memberAPI } from '../../api/memberAPI'
import { MemberRow } from './memberRow'
import { MemberHead } from './memberHead'

interface Props {}

const loadMembers = setMembers => () => {
  memberAPI.getAllMembers('lemoncode').then(members => setMembers(members))
}

export const MembersTableComponent: React.StatelessComponent<Props> = props => {
  const [members, setMembers] = React.useState([] as MemberEntity[])

  return (
    <div className="row">
      <h2> Members Page</h2>
      <button onClick={loadMembers(setMembers)}>Load</button>
      <table className="table">
        <thead>
          <MemberHead />
        </thead>
        <tbody>
          {members.map((member: MemberEntity) => (
            <MemberRow key={member.id} member={member} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
