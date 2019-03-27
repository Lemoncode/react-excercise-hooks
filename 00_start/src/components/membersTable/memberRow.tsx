import * as React from 'react';
import { MemberEntity } from '../../model/member';

interface Props {
  member: MemberEntity;
}

export const MemberRow: React.StatelessComponent<Props> = props => (
  <tr>
    <td>
      <img src={props.member.avatar_url} style={{ maxWidth: '10rem' }} />
    </td>
    <td>
      <span>{props.member.id}</span>
    </td>
    <td>
      <span>{props.member.login}</span>
    </td>
  </tr>
);
