const chatBaseUrl = process.env.NODE_ENV === "production" ? `${document.location.origin}/chat` : process.env.chatServerUrl
const chatSocketUrl = process.env.NODE_ENV === "production" ? `${document.location.origin}` : process.env.chatServerUrl
export default {
  UserPhotoHash:
    process.env.NODE_ENV === "production"
      ? document.location.origin + "/StaticFiles/Employees/Thumbnails/"
      : `${process.env.serverUrl}/StaticFiles/Employees/Thumbnails/`,
  Metadata: `/api/Metadata`,
  account: `/Identity/Account/Manage`,
  History: `/api/History/`,
  DocumentTracking: {
    getDocumentTracking: "/api/DocumentTracking/",
    postDocumentTracking: "/api/DocumentTracking",
    putDocumentTracking: "/api/DocumentTracking/"
  },
  OidcConfiguration: `/_configuration/${process.env.oidcClientId}`,
  sharedDirectory: {
    Country: `/api/Country`,
    Region: `/api/Region`,
    Locality: `/api/Locality`,
    Currency: `/api/Currency`
  },
  hubs: {
    assignmentHub:
      process.env.NODE_ENV === "production"
        ? `/hubs/assignments`
        : `${process.env.serverUrl}/hubs/assignments`,
    UserOnline:
      process.env.NODE_ENV === "production"
        ? `/hubs/online`
        : `${process.env.serverUrl}/hubs/online`
  },
  contragents: {
    Company: `/api/Companies`,
    Bank: `/api/Bank`,
    Person: `/api/Person`,
    CounterPart: `/api/CounterPart`,
    Contact: `/api/Contact`,
    Category: "/api/CounterpartCategory"
  },
  exchange: {
    GetExchangeInfoByCounterPartId: "/api/CounterPart/ExchangeInfo",
    UpdateExchangeInfo: "/api/CounterPart/UpdateExchangeInfo"
  },
  autocompleteTexts: {
    load: "/api/AutoText",
    delete: "/api/AutoText/"
  },
  company: {
    Department: `/api/Department`,
    DepartmentMembers: `/api/DepartmentMembers/`,
    BusinessUnit: `/api/BusinessUnit`,
    Employee: `/api/Employee`,
    employeeLockInfoById: "/api/Employee/GetLockInfo/",
    lockEmployee: "/api/Employee/Lock",
    unlockEmployee: "/api/Employee/Unlock",
    ChangeEmployeePassword: `/api/Employee/ChangePassword`,
    JobTitle: `/api/JobTitle`,
    ManagersAssistant: `/api/ManagersAssistant`
  },
  visibilitySettings: {
    settings: "/api/VisibilitySetting"
  },
  visibilityRule: {
    rule: "/api/VisibilityRule"
  },
  userGroup: {
    group: "/api/ParticipantList"
  },
  phraseTemplate: {
    phrase: "/api/PhraseTemplate"
  },
  admin: {
    Roles: `/api/Role`,
    RoleMembers: `/api/RoleMembers/`
  },
  docFlow: {
    DocumentRegister: {
      Value: `/api/DocumentRegister`,
      All: `/api/DocumentRegister`,
      СustomizableDocumentRegisters: `/api/DocumentRegister/СustomizableDocumentRegisters`,
      PreliminaryNumber: `/api/DocumentRegister/PreliminaryNumber`,
      DefaultDocumentRegister: `/api/DocumentRegister/SuitableDefaultDocumentRegister/`,
      RegistrableDocumentRegisteres: `/api/DocumentRegister/SuitableRegistrableDocumentRegisters/`,
      UserDocumentRegistersForRegistration:
        "/api/DocumentRegister/UserDocumentRegistersForRegistration"
    },
    DocumentRegisterReport: {
      UploadTemplate:
        "/api/DocumentRegisterReport/UploadDocumentRegisterReportTemplate",
      Generate: "/api/DocumentRegisterReport/Generate"
    },
    CaseFile: {
      Value: `/api/CaseFile`,
      All: `/api/CaseFile`,
      AvailableForUse: `/api/CaseFile/AvailableForUse`
    },
    ContractCategories: `/api/ContractCategory`,
    PersonalSettings: `/api/PersonalSettings`,
    DocumentKind: `/api/DocumentKind`,
    DocumentType: `/api/DocumentType`,
    DocumentSendAction: `/api/DocumentSendAction`,
    FileRetentionPeriod: `/api/FileRetentionPeriod`,
    RegistrationGroup: `/api/RegistrationGroup`,
    ResponsibleForGroupOnMe: `/api/RegistrationGroup/ResponsibleOnMe`,
    RegistrationGroupMembers: `/api/RegistrationGroupMembers/`,
    DeliveryMethod: `/api/DeliveryMethod`,
    RegistrationSetting: `/api/RegistrationSetting`,
    AssociatedApplication: `/api/AssociatedApplication`,
    FilesType: `/api/FilesType`
  },
  documentRegistration: {
    RegisterDocument: `/api/OfficialDocument/Register`,
    UnregisterDocument: `/api/OfficialDocument/Unregister`,
    CaseFiles: `/api/DocumentRegistration/CaseFiles`,
    Registries: `/api/DocumentRegistration/Registries/`
  },

  officialDocument: {
    getAll: "/api/OfficialDocument/GetAllOfficialDocument",
  },
  incomingLetter: {
    getAll: "/api/IncomingLetter/getAll",
    document: "/api/IncomingLetter",
    getYears: "/api/IncomingLetter/getYears"
  },
  outgoingLetter: {
    getAll: "/api/OutgoingLetter/GetAll",
    document: "/api/OutgoingLetter"
  },
  order: {
    getAll: "/api/Order/GetAll",
    document: "/api/Order"
  },
  addendum: {
    getAll: "/api/Addendum/GetAll",
    document: "/api/Addendum"
  },
  companyDirective: {
    getAll: "/api/CompanyDirective/GetAll",
    document: "/api/CompanyDirective"
  },
  contractStatement: {
    getAll: "/api/ContractStatement/GetAll",
    document: "/api/ContractStatement"
  },
  incomingInvoice: {
    getAll: "/api/IncomingInvoice/GetAll",
    document: "/api/IncomingInvoice"
  },
  incomingTaxInvoice: {
    getAll: "/api/IncomingTaxInvoice/GetAll",
    document: "/api/IncomingTaxInvoice"
  },
  outgoingTaxInvoice: {
    getAll: "/api/OutgoingTaxInvoice/GetAll",
    document: "/api/OutgoingTaxInvoice"
  },
  memo: {
    getAll: "/api/Memo/GetAll",
    document: "/api/Memo"
  },
  powerOfAttorney: {
    getAll: "/api/PowerOfAttorney/GetAll",
    document: "/api/PowerOfAttorney"
  },
  simpleDocument: {
    getAll: "/api/SimpleDocument/GetAll",
    document: "/api/SimpleDocument"
  },
  supAgreement: {
    getAll: "/api/SupAgreement/GetAll",
    document: "/api/SupAgreement"
  },
  universaltransferdocument: {
    getAll: "/api/Universaltransferdocument/GetAll",
    document: "/api/Universaltransferdocument"
  },
  Waybill: {
    getAll: "/api/Waybill/GetAll",
    document: "/api/Waybill"
  },
  contractualDocuments: {
    getAll: "/api/OfficialDocument/GetAllContractualDocument",
  },
  accountingDocuments: {
    getAll: "/api/OfficialDocument/GetAllAccounting",
  },
  internalDocuments: {
    getAll: "/api/OfficialDocument/GetAllInternalDocument",
  },

  dynamicDocument: {
    documentType: "/api/DocumentType",
    createDocumentType: "/api/DocumentType/CreateDynamicDocumentType",
    getAll: "/api/DynamicDocument/GetAll",
    document: "/api/DynamicDocument"
  },
  allDocuments: {
    getAll: "/api/OfficialDocument/GetAll/100"
  },
  documentTemplate: {
    Documents: `/api/DocumentTemplate`,
    GetDocumentById: `/api/DocumentTemplate/`,
    GetDocumentTemplateByParams: `/api/DocumentTemplate/getDocumentTemplateByParams/`,
    GetAllMergeFieldName: `/api/DocumentTemplate/getAllMergeFieldName/`
  },

  documentModule: {
    GetAllCountDocument: "/api/OfficialDocument/GetAllCountDocument",
    Documents: `/api/OfficialDocument/GetAll/`,
    AllDocument: `/api/OfficialDocument/GetAll/100/0`,
    SaveDocument: `/api/OfficialDocument/`,
    CreateDocument: `/api/OfficialDocument/`,
    GetDocumentById: `/api/OfficialDocument/`,
    DeleteDocument: `/api/OfficialDocument/`,
    ReevaluateDocumentName: `/api/OfficialDocument/ReevaluateDocumentName`,
    Version: `/api/OfficialDocument/Version/`,
    Relation: `/api/Documentrelations/Relations/`,
    CreateVersionFromFile: `/api/OfficialDocument/Version/ImportFromFile/`,
    CreateVersionFromTemplate: `/api/OfficialDocument/Version/CreateFromTemplate`,
    ImportVersion: `/api/OfficialDocument/Version/Export/`,
    ImportLastVersion: `/api/OfficialDocument/Export/`,
    RemoveVersion: `/api/OfficialDocument/Version/`,
    Last: `/api/OfficialDocument/Version/Last/`,
    Exchange: `/api/OfficialDocument/Exchange`,
    ExchangeLogs: `/api/OfficialDocument/ExchangeLogs/`
  },
  accessRightRule: {
    getAccessRightRule: "/api/AccessRightRule"
  },
  task: {
    GetTasksByDocument: `/api/Task/GetTasksByDocument/`,
    GrantPermissions: `/api/Task/GrantPermissions`,
    CheckMembersPermissions: `/api/Task/CheckMembersPermissions/`,
    actionItemExecution: {
      GetAvailableProducers: `/api/Task/ActionItemExecution/GetAvailableProducers/`
    },
    ReevaluateTaskName: `/api/Task/ComputeTaskSubject`,
    TextsByTask: `/api/WorkflowEntityText/ByTask/`,
    Task: `/api/Task/GetAllTasks/`,
    GetTaskById: `/api/Task/`,
    Delete: `/api/Task/`,
    UpdateTask: `/api/Task/`,
    CreateTask: `/api/Task/Create`,
    СreateTaskByDocument: `/api/Task/CreateTaskByDocument`,
    CreateSubtaskByTask: "/api/Task/CreateSubtask",

    CreateChildActionItemExecution: `/api/Task/CreateChildActionItemExecutionTask`,
    CreateDraftResolutionActionItemExecutionTask: `/api/Task/CreateDraftResolutionActionItemExecutionTask`,

    Abort: `/api/Task/Abort`,
    Start: `/api/Task/Start`,
    Restart: `/api/Task/Restart`,
    Remove: `/api/Task/RemoveAttachment`
  },
  accessRights: {
    List: `/api/AccessRights/`,
    getById: `/api/AccessRights/`,
    AddRecipient: `/api/AccessRights`,
    UpdateRecipient: `/api/AccessRights/`,
    RemoveRecipient: `/api/AccessRights/`
  },
  assignment: {
    CreateSubtask: `api/Assignment/CreateSubtask`,
    GrantPermissions: `/api/Assignment/GrantPermissions`,
    CheckMembersPermissions: `/api/Assignment/CheckMembersPermissions/`,
    HasChildActionItemItems: `/api/Assignment/HasChildActionItemItems/`,
    Assignments: `/api/Assignment/`,
    GetAssignmentById: `/api/Assignment/GetAssignmentById/`,
    CompleteAssignment: `/api/Assignment/CompleteAssignment`,
    MarkAsRead: `/api/Assignment/MarkAsRead`,
    MarkAsUnread: `/api/Assignment/MarkAsUnread`,
    TextsByAssignment: `/api/WorkflowEntityText/ByAssignment/`,
    CompleteDraftResolutionAssignments: `/api/Assignment/CompleteDraftResolutionsAssignments`,
    AddApprover: `/api/Assignment/AddApprover`,
    MainAttachmentInfo: `/api/Assignment/GetMainAttachmentInfo/`
  },
  recipient: {
    list: `/api/Recipient`
  },
  signatureSettings: {
    Members: `/api/SignatureSettings/Members`
  },
  attachment: {
    Detach: `/api/Attachment/Detach`,
    PasteByTask: `/api/Attachment/Task/Paste`,
    PasteByAssignment: `/api/Attachment/Assignment/Paste`
  },
  import: {
    companies: `/api/Import/Companies`,
    banks: `/api/Import/Banks`,
    jobTitles: `/api/Import/JobTitles`,
    persons: `/api/Import/Persons`,
    employees: `/api/Import/Employees`
  },
  spreadSheet: {
    OpenDocument: "/api/spreadSheet/open",
    ExportDocument: "/api/spreadSheet/exportDocument",
    ExportDocumentWithUrl:
      process.env.NODE_ENV === "production"
        ? "/api/spreadSheet/exportDocument"
        : `${process.env.serverUrl}/api/spreadSheet/exportDocument`,
    ImportVersion: "/api/spreadSheet/importVersion/",
    ImportDocument: "/api/spreadSheet/importDocument/",
    ImportVersionWithUrl:
      process.env.NODE_ENV === "production"
        ? "/api/spreadSheet/importVersion"
        : `${process.env.serverUrl}/api/spreadSheet/importVersion`,
    ImportDocumentWithUrl:
      process.env.NODE_ENV === "production"
        ? "/api/spreadSheet/importVersion"
        : `${process.env.serverUrl}/api/spreadSheet/importDocument`
  },
  pdfViewer: {
    ServerUrl:
      process.env.NODE_ENV === "production"
        ? "/api/pdfViewer"
        : `${process.env.serverUrl}/api/pdfViewer`
  },
  documentEditor: {
    ServerUrl:
      process.env.NODE_ENV === "production"
        ? "/api/documentEditor/"
        : `${process.env.serverUrl}/api/documentEditor/`,
    ImportDocument: "/api/DocumentEditor/importDocument/",
    ImportVersion: "/api/DocumentEditor/importVersion/",
    ExportDocument: "/api/DocumentEditor/Export/"
  },
  activeUser: {
    GetActiveUsers: `/api/ActiveUser`,
    EndSession: `/api/ActiveUser/EndSession/`
  },
  licensing: {
    getLicense: "/api/License"
  },
  boxes: {
    Boxes: `/api/Boxes`,
    PublickKey: `/api/Boxes/PublicKey/`
  },
  chat: {
    baseUrl: chatSocketUrl,
    Room: `${chatBaseUrl}/api/Room`,
    RoomsByFilter: `${chatBaseUrl}/api/Room/roomsByFilter`,
    Message: `${chatBaseUrl}/api/Message`,
    File: `${chatBaseUrl}/api/Message/file`,
    MarkAsRead: `${chatBaseUrl}/api/Message/MarkAsRead`,
    User: `${chatBaseUrl}/api/User`,
    CreatePrivateRoom: `${chatBaseUrl}/api/Room/CreatePrivateRoom`,
    CreateGroupRoom: `${chatBaseUrl}/api/Room/CreateGroupRoom`,
    DownloadFile: `${chatBaseUrl}/api/Message/downloadFile/`
  }
};
