function skillsMember() {
  // Path: member.js
  function getSkills() {
    return ['skill1', 'skill2', 'skill3'];
  }

  // Path: member.js
  function getMemberSkills() {
    return getSkills().map((skill) => {
      return `Member has ${skill}`;
    });
  }

  return {
    getSkills,
    getMemberSkills,
  };
}
