export class AgentDetail {
    id: number;
    mastersubid: number;
    requestID: string;
    applicationid: string;
    masterAgentCodeID: string;
    subagentcodeid: number;
    agentid: number;
    iscorp: boolean;
    corpname: string;
    ismerch: boolean;
    merchcategory: string;
    isbusiness: boolean;
    businessname: string;
    phoneno: string;
    firstname: string;
    middlename: string;
    lastname: string;
    streetno: string;
    town: string;
    city: string;
    country: string;
    postalcode: number;
    comptin: string;
    ctcno: number;
    dailydeplimit: number;
    createddatetime: Date;
    updatedatetime: Date;
    usercreate: string;
    lastuserupdate: string;
    isdeleted: boolean;
}

export class BankDetail {
    id: number;
    requestID: string;
    applicationid: string;
    depbank: string;
    streetno: string;
    town: string;
    city: string;
    country: string;
    postalcode: number;
    bankacctname: string;
    rbotype: string;
    rbofname: Date;
    rbomiddlename: Date;
    rbolastname: string;
    rboemailadd: string;
    rbocontactno: boolean;
    createddatetime: Date;
    updatedatetime: Date;
    usercreate: string;
    lastuserupdate: string;
    isdeleted: boolean;
}

export class ContactInformation {
    id: number;
    requestID: string;
    applicationid: string;
    firstname: string;
    middlename: string;
    lastname: string;
    designation: string;
    department: string;
    contactno: string;
    faxno: string;
    emailadd: string;
    billfname: string;
    billmname: string;
    billlname: string;
    billcontactno: string;
    createddatetime: Date;
    updatedatetime: Date;
    usercreate: string;
    lastuserupdate: string;
    isdeleted: boolean;
}

export class MoaDetail {
    id: number;
    requestID: string;
    applicationid: string;
    authid: number;
    authfname: string;
    authmname: string;
    authlname: string;
    authdesignation: string;
    validtype: string;
    valididno: string;
    validexpdate: string;
    createddatetime: Date;
    updatedatetime: Date;
    usercreate: string;
    lastuserupdate: string;
    isdeleted: boolean;
}

export class AgentBranchesDetail {
    id: number;
    requestID: string;
    applicationid: string;
    noofagent: number;
    agentstreetno: string;
    agenttown: string;
    agentcity: string;
    agentcountry: string;
    agentpostalcode: string;
}

export class TerminalDetail {
    id: number;
    requestID: string;
    applicationid: string;
    terminalname: number;
    postype: string;
}

export class MasterAgent {
    masterAgentCodeID: string;
}
