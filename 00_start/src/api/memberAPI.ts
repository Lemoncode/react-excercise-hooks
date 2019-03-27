import { MemberEntity } from '../model/member';

const checkStatus = (response: Response): Promise<Response> => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    throw new Error(response.statusText);
  }
};

const parseJSON = (response: Response) => {
  return response.json();
};

const resolveMembers = (data): Promise<MemberEntity[]> => {
  const members = data.map(({ id, login, avatar_url }) => ({
    id,
    login,
    avatar_url,
  }));

  return Promise.resolve(members);
};

const getAllMembers = (organizationName: string): Promise<MemberEntity[]> => {
  const gitHubMembersUrl: string = `https://api.github.com/orgs/${organizationName}/members`;

  return fetch(gitHubMembersUrl)
    .then(response => checkStatus(response))
    .then(response => parseJSON(response))
    .then(data => resolveMembers(data));
};

export const memberAPI = {
  getAllMembers,
};
