import {
  orders, orderContractTerm, orderContact, orderProvision, orderAccountProfile,
  orderNewOrder, orderAgent, orderPaymentDetail, orderContractImage, orderPoNumber, orderCatalog, orderParameter
} from "./orders.interface";

export let orderContractTerms : Array<orderContractTerm> = [
  {
    subscriptionName : 'Harry',
    contractSignDate : '31-7-97',
    expectedStartDate : '1-1-07,',
    purpose : 'To find and destroy the horcrux',
    renewalContract : '2-11-10'
  },
  {
    subscriptionName : 'Harry',
    contractSignDate : '31-7-97',
    expectedStartDate : '1-1-07',
    purpose : 'To find and destroy the horcrux',
    renewalContract : '2-11-10'
  },
  {
    subscriptionName : 'Harry',
    contractSignDate : '31-7-97',
    expectedStartDate : '1-1-07,',
    purpose : 'To find and destroy the horcrux',
    renewalContract : '2-11-10'
  }
];

export let orderCatalogData : Array<orderCatalog> = [
  {
    currentSelectedOffer : 'MP Ports + Overage'
  },
  {
    currentSelectedOffer : 'MPC'
  },
  {
    currentSelectedOffer : 'MPC'
  }
];

export let orderParameterData : Array<orderParameter> = [
  {
    offerCheckBox  : true,
    offerInitialTermQty : 45,
    offerRenewalTermQty : 7687,
    offerPrepayTermQty : '1(Monthly)',
    numberOfFreeMonthsQty : 67,
    offerName : 'MP +Ports',
    serviceSetupCheckBox : true,
    brandingCheckBox : true,
    brandingFeeCheckBox : false,
    brandingFeeEstPrice : 199,
    primaryLanguageCheckBox : true,
    primaryLanguage : 'English',
    meetingAssistCheckBox : true,
    meetingAssistUnitPrice : '$1.00',
    additionalHoursCheckBox : true,
    additionalHoursUnitPrice : '$2.24',
    recordingCheckBox : true,
    recordingUnitPrice : '$6.90',
    moCommittedType : 'None',
    moCommitmentQty : '$5.90',
    moCommitmentUnitPrice : '$6.90',
    opChangeUSDCheckBox : true,
    psoUSDCheckBox : true,
    additionalStorageCheckBox : false,
    nbrStorageCheckBox : false,
    includedFreeStorageQty : '$7.9',
    committedMonthlyStorageQty : '$9.0',
    committedMonthlyStorageUnitPrice : '$6.90',
    overageCheckBox : true,
    overageUnitPrice : '$5.0',
    reportingUSDCheckBox : true,
    optionUSDCheckBox : true
  },
  {
    offerCheckBox  : true,
    offerInitialTermQty : 45,
    offerRenewalTermQty : 7687,
    offerPrepayTermQty : '2(Yearly)',
    numberOfFreeMonthsQty : 67,
    offerName : 'MP +Ports',
    serviceSetupCheckBox : true,
    brandingCheckBox : true,
    brandingFeeCheckBox : false,
    brandingFeeEstPrice : 199,
    primaryLanguageCheckBox : true,
    primaryLanguage : 'English',
    meetingAssistCheckBox : true,
    meetingAssistUnitPrice : '$1.00',
    additionalHoursCheckBox : true,
    additionalHoursUnitPrice : '$2.24',
    recordingCheckBox : true,
    recordingUnitPrice : '$6.90',
    moCommittedType : 'None',
    moCommitmentQty : '$5.90',
    moCommitmentUnitPrice : '$6.90',
    opChangeUSDCheckBox : true,
    psoUSDCheckBox : true,
    additionalStorageCheckBox : false,
    nbrStorageCheckBox : false,
    includedFreeStorageQty : '$7.9',
    committedMonthlyStorageQty : '$9.0',
    committedMonthlyStorageUnitPrice : '$6.90',
    overageCheckBox : true,
    overageUnitPrice : '$6.0',
    reportingUSDCheckBox : true,
    optionUSDCheckBox : true
  },
  {
    offerCheckBox  : true,
    offerInitialTermQty : 45,
    offerRenewalTermQty : 7687,
    offerPrepayTermQty : '1(Monthly)',
    numberOfFreeMonthsQty : 67,
    offerName : 'MP +Ports',
    serviceSetupCheckBox : true,
    brandingCheckBox : true,
    brandingFeeCheckBox : false,
    brandingFeeEstPrice : 199,
    primaryLanguageCheckBox : true,
    primaryLanguage : 'English',
    meetingAssistCheckBox : true,
    meetingAssistUnitPrice : '$1.00',
    additionalHoursCheckBox : true,
    additionalHoursUnitPrice : '$2.24',
    recordingCheckBox : true,
    recordingUnitPrice : '$6.90',
    moCommittedType : 'None',
    moCommitmentQty : '$5.90',
    moCommitmentUnitPrice : '$6.90',
    opChangeUSDCheckBox : true,
    psoUSDCheckBox : true,
    additionalStorageCheckBox : false,
    nbrStorageCheckBox : false,
    includedFreeStorageQty : '$7.9',
    committedMonthlyStorageQty : '$9.0',
    committedMonthlyStorageUnitPrice : '$6.90',
    overageCheckBox : true,
    overageUnitPrice : '$2.0',
    reportingUSDCheckBox : true,
    optionUSDCheckBox : true
  }
];

export let orderProvisionData : Array<orderProvision> = [
  {
    services : 'Business',
    language : 'English',
    webExURL : 'gbhd@web.com',
    timeZone : 'Canada',
    brandingSiteReference : 23435
  },
  {
    services : 'Business',
    language : 'Chinese',
    webExURL : 'gbhd@web.com',
    timeZone : 'Canada',
    brandingSiteReference : 23435
  },
  {
    services : 'Business',
    language : 'Japanese',
    webExURL : 'gbhd@web.com',
    timeZone : 'Canada',
    brandingSiteReference : 23435
  }
];

export let orderContactData : Array<Array<orderContact>> = [
  [
    {
      contactType : 'Business',
      individualName : 'ccAft3',
      firstName : 'Jingy',
      lastName : 'Rain',
      title : 'Snow',
      jobFunction : 'witch',
      department : 'CS',
      email : 'jinglika@gmail.com',
      workPhone : 123456,
      homePhone : 5674738,
      cellPhone : 78555654,
      fax : 3545,
      marketingProject : 'Sales',
      reportsTo : 'Varsha',
      referredBy : 'Niks',
      address1 : 'dadaqws',
      address2 : 'gkjhj,',
      city : 'chennai',
      state : 'tn',
      country : 'india',
      zip : 1234,
      notes : 'vgfnshdgjh'
    },
    {
      contactType : 'Business',
      individualName : '45rdv',
      firstName : 'Yals',
      lastName : 'Rain',
      title : 'Snow',
      jobFunction : 'witch',
      department : 'CS',
      email : 'jinglika@gmail.com',
      workPhone : 123456,
      homePhone : 5674738,
      cellPhone : 78555654,
      fax : 3545,
      marketingProject : 'Sales',
      reportsTo : 'Varsha',
      referredBy : 'Niks',
      address1 : 'dadaqws',
      address2 : 'gkjhj,',
      city : 'chennai',
      state : 'tn',
      country : 'india',
      zip : 1234,
      notes : 'vgfnshdgjh'
    },
    {
      contactType : 'Business',
      individualName : 'gg456',
      firstName : 'Vasudha',
      lastName : 'Rain',
      title : 'Snow',
      jobFunction : 'witch',
      department : 'CS',
      email : 'jinglika@gmail.com',
      workPhone : 123456,
      homePhone : 5674738,
      cellPhone : 78555654,
      fax : 3545,
      marketingProject : 'Sales',
      reportsTo : 'Varsha',
      referredBy : 'Niks',
      address1 : 'dadaqws',
      address2 : 'gkjhj,',
      city : 'chennai',
      state : 'tn',
      country : 'india',
      zip : 1234,
      notes : 'vgfnshdgjh'
    }
  ],
  [
    {
      contactType : 'Business',
      individualName : 'ccAft3',
      firstName : 'Jingy',
      lastName : 'Rain',
      title : 'Snow',
      jobFunction : 'witch',
      department : 'CS',
      email : 'jinglika@gmail.com',
      workPhone : 123456,
      homePhone : 5674738,
      cellPhone : 78555654,
      fax : 3545,
      marketingProject : 'Sales',
      reportsTo : 'Varsha',
      referredBy : 'Niks',
      address1 : 'dadaqws',
      address2 : 'gkjhj,',
      city : 'chennai',
      state : 'tn',
      country : 'india',
      zip : 1234,
      notes : 'vgfnshdgjh'
    },
    {
      contactType : 'Business',
      individualName : '45rdv',
      firstName : 'Yals',
      lastName : 'Rain',
      title : 'Snow',
      jobFunction : 'witch',
      department : 'CS',
      email : 'jinglika@gmail.com',
      workPhone : 123456,
      homePhone : 5674738,
      cellPhone : 78555654,
      fax : 3545,
      marketingProject : 'Sales',
      reportsTo : 'Varsha',
      referredBy : 'Niks',
      address1 : 'dadaqws',
      address2 : 'gkjhj,',
      city : 'chennai',
      state : 'tn',
      country : 'india',
      zip : 1234,
      notes : 'vgfnshdgjh'
    },
    {
      contactType : 'Business',
      individualName : 'gg456',
      firstName : 'Vasudha',
      lastName : 'Rain',
      title : 'Snow',
      jobFunction : 'witch',
      department : 'CS',
      email : 'jinglika@gmail.com',
      workPhone : 123456,
      homePhone : 5674738,
      cellPhone : 78555654,
      fax : 3545,
      marketingProject : 'Sales',
      reportsTo : 'Varsha',
      referredBy : 'Niks',
      address1 : 'dadaqws',
      address2 : 'gkjhj,',
      city : 'chennai',
      state : 'tn',
      country : 'india',
      zip : 1234,
      notes : 'vgfnshdgjh'
    }
  ],
  [
    {
      contactType : 'Business',
      individualName : 'ccAft3',
      firstName : 'Jingy',
      lastName : 'Rain',
      title : 'Snow',
      jobFunction : 'witch',
      department : 'CS',
      email : 'jinglika@gmail.com',
      workPhone : 123456,
      homePhone : 5674738,
      cellPhone : 78555654,
      fax : 3545,
      marketingProject : 'Sales',
      reportsTo : 'Varsha',
      referredBy : 'Niks',
      address1 : 'dadaqws',
      address2 : 'gkjhj,',
      city : 'chennai',
      state : 'tn',
      country : 'india',
      zip : 1234,
      notes : 'vgfnshdgjh'
    },
    {
      contactType : 'Business',
      individualName : '45rdv',
      firstName : 'Yals',
      lastName : 'Rain',
      title : 'Snow',
      jobFunction : 'witch',
      department : 'CS',
      email : 'jinglika@gmail.com',
      workPhone : 123456,
      homePhone : 5674738,
      cellPhone : 78555654,
      fax : 3545,
      marketingProject : 'Sales',
      reportsTo : 'Varsha',
      referredBy : 'Niks',
      address1 : 'dadaqws',
      address2 : 'gkjhj,',
      city : 'chennai',
      state : 'tn',
      country : 'india',
      zip : 1234,
      notes : 'vgfnshdgjh'
    },
    {
      contactType : 'Business',
      individualName : 'gg456',
      firstName : 'Vasudha',
      lastName : 'Rain',
      title : 'Snow',
      jobFunction : 'witch',
      department : 'CS',
      email : 'jinglika@gmail.com',
      workPhone : 123456,
      homePhone : 5674738,
      cellPhone : 78555654,
      fax : 3545,
      marketingProject : 'Sales',
      reportsTo : 'Varsha',
      referredBy : 'Niks',
      address1 : 'dadaqws',
      address2 : 'gkjhj,',
      city : 'chennai',
      state : 'tn',
      country : 'india',
      zip : 1234,
      notes : 'vgfnshdgjh'
    }
  ]
];

export let orderAgentData :  Array<Array<orderAgent>> = [
  [
    {
      initialSalesRep : 'Tracy',
      currentOwner : 'Chan',
      csm :'huewik',
      salesEngineer :'wety',
      salesAccess :'uhyjfynk',
      collector :'kjwdkjm'
    },
    {
      initialSalesRep : 'Tracy',
      currentOwner : 'Chan',
      csm :'huewik',
      salesEngineer :'wety',
      salesAccess :'uhyjfynk',
      collector :'kjwdkjm'
    },
    {
      initialSalesRep : 'Tracy',
      currentOwner : 'Chan',
      csm :'huewik',
      salesEngineer :'wety',
      salesAccess :'uhyjfynk',
      collector :'kjwdkjm'
    },
  ],
  [
    {
      initialSalesRep : 'Varsha',
      currentOwner : 'Chan',
      csm :'huewik',
      salesEngineer :'wety',
      salesAccess :'uhyjfynk',
      collector :'kjwdkjm'
    },
    {
      initialSalesRep : 'Tracy',
      currentOwner : 'Chan',
      csm :'huewik',
      salesEngineer :'wety',
      salesAccess :'uhyjfynk',
      collector :'kjwdkjm'
    },
    {
      initialSalesRep : 'Tracy',
      currentOwner : 'Chan',
      csm :'huewik',
      salesEngineer :'wety',
      salesAccess :'uhyjfynk',
      collector :'kjwdkjm'
    },
  ],
  [
    {
      initialSalesRep : 'Trudy',
      currentOwner : 'Chan',
      csm :'huewik',
      salesEngineer :'wety',
      salesAccess :'uhyjfynk',
      collector :'kjwdkjm'
    },
    {
      initialSalesRep : 'Tracy',
      currentOwner : 'Chan',
      csm :'huewik',
      salesEngineer :'wety',
      salesAccess :'uhyjfynk',
      collector :'kjwdkjm'
    },
    {
      initialSalesRep : 'Tracy',
      currentOwner : 'Chan',
      csm :'huewik',
      salesEngineer :'wety',
      salesAccess :'uhyjfynk',
      collector :'kjwdkjm'
    },
  ]
];

export let orderAccountProfileData : Array<orderAccountProfile> = [
  {
    primarySalesRep : 'Varsha',
    teamName : 'Alohamora',
    industry : 'Cisco',
    totalEmployees : 4677,
    estAnnualSales : 2345,
    knowledgeWorkers : 45678,
    companyDescription : 'Network',
    businessHour : '6.00',
    businessTimeZone : 'IST +530 India',
    desktopOperatingSystemCur  : 'ftguyh',
    desktopOperatingSystemFut : 'fghio',
    serverOperatingSystemCur : 'grtfrtw',
    serverOperatingSystemFut : 'wezxfdac',
    routingCur : 'tyrev',
    routingFut : 'uyqqbnz',
    emailCur : 'rtfrjgn@yaho.com',
    emailFut : 'ytgxbnd@yahoo.com',
    webCollaborationApplicationCur : 'appli',
    webCollaborationApplicationFut : 'rtgt',
    businessIMCur : 'tgttd',
    businessIMFut : 'rerxvx',
    telephonyInternalCur : 'yhgnz' ,
    telephonyInternalFut : 'rvfxrqwe54',
    telephonyExternalCur : '56gbzm,d',
    telephonyExternalFut : 'ybnf',
    systemsManagementCur : 'trfsnh',
    systemsManagementFut : 'esvsn',
    helpDeskCur : 'tbfvbx',
    helpDeskFut : 'edfc,' ,
    businessContinuanceCur : 'fdsfnvnb',
    businessContinuanceFut : 'edfbg',
    lmsCur : 'fb',
    lmsFut :'ew',
    lcmsCur : 'sf',
    lcmsFut : 'drfw',
    contentAuthoringCur : 'ghn',
    contentAuthoringFut : 'dhghn',
    marketingAutomationCur : 'tdrfgh',
    marketingAutomationFut : 'redf',
    broadcastingCur : 'ghbh',
    broadcastingFut : 'dgfv',
    salesDeptApplicationCur : 'gyh',
    salesDeptApplicationFut : 'rdfvb',
    projectManagementApplicationCur : 'gdfvbg',
    projectManagementApplicationFut : 'hfbhb',
    initialWebExUsers : 4656,
    corporateInternalMeeting : false,
    internalTraining : false,
    externalTraining : false,
    pressAnalystBriefing : false,
    salesDemos : false,
    other : false,
    externalTechnicalSupport : false,
    internalTechnicalSupport : false,
    largeMeeting :false,
    projectManagement : false,
    webminar : false,
    informationNotAvailable : false,
    departmentSelectingWebEx : 'dgfbg',
    primaryDepartment : 'tjghn',
    customerServiceExternal : false,
    engineeringRD : false,
    humanResources : false,
    legal : false,
    sales : false,
    trainingInternal : false,
    prInvestorsRelation : false,
    operation : false,
    supportInternal : false,
    accountingFinance : false,
    itMis : false,
    marketing : false,
    trainingExternal : false,
    companyWide : false,
    manufacturing : false,
    executiveManagement : false,
    businessDevelopment : false,
    other1 : false,
    informationNotAvailable1 : false
  },
  {
    primarySalesRep : 'Kala',
    teamName : 'Alohamora',
    industry : 'Cisco',
    totalEmployees : 4677,
    estAnnualSales : 2345,
    knowledgeWorkers : 45678,
    companyDescription : 'Network',
    businessHour : '6.00',
    businessTimeZone : 'IST +530 India',
    desktopOperatingSystemCur  : 'ftguyh',
    desktopOperatingSystemFut : 'fghio',
    serverOperatingSystemCur : 'grtfrtw',
    serverOperatingSystemFut : 'wezxfdac',
    routingCur : 'tyrev',
    routingFut : 'uyqqbnz',
    emailCur : 'rtfrjgn@yaho.com',
    emailFut : 'ytgxbnd@yahoo.com',
    webCollaborationApplicationCur : 'appli',
    webCollaborationApplicationFut : 'rtgt',
    businessIMCur : 'tgttd',
    businessIMFut : 'rerxvx',
    telephonyInternalCur : 'yhgnz' ,
    telephonyInternalFut : 'rvfxrqwe54',
    telephonyExternalCur : '56gbzm,d',
    telephonyExternalFut : 'ybnf',
    systemsManagementCur : 'trfsnh',
    systemsManagementFut : 'esvsn',
    helpDeskCur : 'tbfvbx',
    helpDeskFut : 'edfc,' ,
    businessContinuanceCur : 'fdsfnvnb',
    businessContinuanceFut : 'edfbg',
    lmsCur : 'fb',
    lmsFut :'ew',
    lcmsCur : 'sf',
    lcmsFut : 'drfw',
    contentAuthoringCur : 'ghn',
    contentAuthoringFut : 'dhghn',
    marketingAutomationCur : 'tdrfgh',
    marketingAutomationFut : 'redf',
    broadcastingCur : 'ghbh',
    broadcastingFut : 'dgfv',
    salesDeptApplicationCur : 'gyh',
    salesDeptApplicationFut : 'rdfvb',
    projectManagementApplicationCur : 'gdfvbg',
    projectManagementApplicationFut : 'hfbhb',
    initialWebExUsers : 4656,
    corporateInternalMeeting : false,
    internalTraining : false,
    externalTraining : false,
    pressAnalystBriefing : false,
    salesDemos : false,
    other : false,
    externalTechnicalSupport : false,
    internalTechnicalSupport : false,
    largeMeeting :false,
    projectManagement : false,
    webminar : false,
    informationNotAvailable : false,
    departmentSelectingWebEx : 'dgfbg',
    primaryDepartment : 'tjghn',
    customerServiceExternal : false,
    engineeringRD : false,
    humanResources : false,
    legal : false,
    sales : false,
    trainingInternal : false,
    prInvestorsRelation : false,
    operation : false,
    supportInternal : false,
    accountingFinance : false,
    itMis : false,
    marketing : false,
    trainingExternal : false,
    companyWide : false,
    manufacturing : false,
    executiveManagement : false,
    businessDevelopment : false,
    other1 : false,
    informationNotAvailable1 : false
  },
  {
    primarySalesRep : 'Suprajaa',
    teamName : 'Alohamora',
    industry : 'Cisco',
    totalEmployees : 4677,
    estAnnualSales : 2345,
    knowledgeWorkers : 45678,
    companyDescription : 'Network',
    businessHour : '6.00',
    businessTimeZone : 'IST +530 India',
    desktopOperatingSystemCur  : 'ftguyh',
    desktopOperatingSystemFut : 'fghio',
    serverOperatingSystemCur : 'grtfrtw',
    serverOperatingSystemFut : 'wezxfdac',
    routingCur : 'tyrev',
    routingFut : 'uyqqbnz',
    emailCur : 'rtfrjgn@yaho.com',
    emailFut : 'ytgxbnd@yahoo.com',
    webCollaborationApplicationCur : 'appli',
    webCollaborationApplicationFut : 'rtgt',
    businessIMCur : 'tgttd',
    businessIMFut : 'rerxvx',
    telephonyInternalCur : 'yhgnz' ,
    telephonyInternalFut : 'rvfxrqwe54',
    telephonyExternalCur : '56gbzmd',
    telephonyExternalFut : 'ybnf',
    systemsManagementCur : 'trfsnh',
    systemsManagementFut : 'esvsn',
    helpDeskCur : 'tbfvbx',
    helpDeskFut : 'edfc,' ,
    businessContinuanceCur : 'fdsfnvnb',
    businessContinuanceFut : 'edfbg',
    lmsCur : 'fb',
    lmsFut :'ew',
    lcmsCur : 'sf',
    lcmsFut : 'drfw',
    contentAuthoringCur : 'ghn',
    contentAuthoringFut : 'dhghn',
    marketingAutomationCur : 'tdrfgh',
    marketingAutomationFut : 'redf',
    broadcastingCur : 'ghbh',
    broadcastingFut : 'dgfv',
    salesDeptApplicationCur : 'gyh',
    salesDeptApplicationFut : 'rdfvb',
    projectManagementApplicationCur : 'gdfvbg',
    projectManagementApplicationFut : 'hfbhb',
    initialWebExUsers : 4656,
    corporateInternalMeeting : false,
    internalTraining : false,
    externalTraining : false,
    pressAnalystBriefing : false,
    salesDemos : false,
    other : false,
    externalTechnicalSupport : false,
    internalTechnicalSupport : false,
    largeMeeting :false,
    projectManagement : false,
    webminar : false,
    informationNotAvailable : false,
    departmentSelectingWebEx : 'dgfbg',
    primaryDepartment : 'tjghn',
    customerServiceExternal : false,
    engineeringRD : false,
    humanResources : false,
    legal : false,
    sales : false,
    trainingInternal : false,
    prInvestorsRelation : false,
    operation : false,
    supportInternal : false,
    accountingFinance : false,
    itMis : false,
    marketing : false,
    trainingExternal : false,
    companyWide : false,
    manufacturing : false,
    executiveManagement : false,
    businessDevelopment : false,
    other1 : false,
    informationNotAvailable1 : false
  }
];

export let orderNewOrderData : Array<orderNewOrder> = [
  {
    accountName : 'third',
    orgName : 'uyyjh',
    exchangeRate : '7-89-4',
    exchangeRateDate : '7-90-09',
    comments : 'rytfswdcvgbn',
    primarySR1 : 'tdy',
    primarySR2 : 'tdy',
    primarySR3 : 'tyg5',
    primarySR4 : 'ftf4',
    secondSR1 : 'gds1',
    secondSR2 : 'bdn1',
    secondSR3 : 'daq1r1',
    secondSR4 : 'tfgfgd76',
    thirdSR1 : 'vbcg1',
    thirdSR2 : 'vdb1',
    thirdSR3 : 'fdxv',
    thirdSR4 : 'fgvvz',
    CSM1 : 'dhhn',
    CSM2 : 'dgn',
    CSM3 : 'ugyq',
    CSM4 : 'gdhn',
    sfdfDealNumber : 156587
  },
  {
    accountName : 'second',
    orgName : 'uyyjh',
    exchangeRate : '7-89-4',
    exchangeRateDate : '7-90-09',
    comments : 'rytfswdcvgbn',
    primarySR1 : 'tdy',
    primarySR2 : 'tdy',
    primarySR3 : 'tyg5',
    primarySR4 : 'ftf4',
    secondSR1 : 'gds1',
    secondSR2 : 'bdn1',
    secondSR3 : 'daq1r1',
    secondSR4 : 'tfgfgd76',
    thirdSR1 : 'vbcg1',
    thirdSR2 : 'vdb1',
    thirdSR3 : 'fdxv',
    thirdSR4 : 'fgvvz',
    CSM1 : 'dhhn',
    CSM2 : 'dgn',
    CSM3 : 'ugyq',
    CSM4 : 'gdhn',
    sfdfDealNumber : 156587
  },
  {
    accountName : 'fourths',
    orgName : 'uyyjh',
    exchangeRate : '7-89-4',
    exchangeRateDate : '7-90-09',
    comments : 'rytfswdcvgbn',
    primarySR1 : 'tdy',
    primarySR2 : 'tdy',
    primarySR3 : 'tyg5',
    primarySR4 : 'ftf4',
    secondSR1 : 'gds1',
    secondSR2 : 'bdn1',
    secondSR3 : 'daq1r1',
    secondSR4 : 'tfgfgd76',
    thirdSR1 : 'vbcg1',
    thirdSR2 : 'vdb1',
    thirdSR3 : 'fdxv',
    thirdSR4 : 'fgvvz',
    CSM1 : 'dhhn',
    CSM2 : 'dgn',
    CSM3 : 'ugyq',
    CSM4 : 'gdhn',
    sfdfDealNumber : 156587
  }
];

export let orderPaymentDetailData : Array<orderPaymentDetail> = [
  {
    paymentMethod: 'CreditCard',
    creditCard: 'VISA',
    creditCardNumber: '402912315623123',
    expirationDateMonth: 1,
    expirationDateYear : 12,
    nameInCard: 'Aakash C',
    cardSecurityCode: '071',
  },
  {
    paymentMethod: 'CreditCard',
    creditCard: 'VISA',
    creditCardNumber: '402912456453123123',
    expirationDateMonth: 2,
    expirationDateYear : 12,
    nameInCard: 'Aakash C',
    cardSecurityCode: '071',
  },
  {
    paymentMethod: 'CreditCard',
    creditCard: 'VISA',
    creditCardNumber: '40291456423123123',
    expirationDateMonth: 3,
    expirationDateYear : 12,
    nameInCard: 'Aakash C',
    cardSecurityCode: '071',
  }
];

export let orderContractImageData : Array<orderContractImage> = [
  {
    serviceConfiguration : 'Business',
    files : ['abc.jpg','bcd.jpg'],
    imageName : 'ABC',
    imageDescription : 'Business Profile'
  },
  {
    serviceConfiguration : 'Business',
    files : ['abc.jpg','bcd.jpg'],
    imageName : 'DEF',
    imageDescription : 'Business Profile'
  },
  {
    serviceConfiguration : 'Business',
    files : ['abc.jpg','bcd.jpg'],
    imageName : 'GHI',
    imageDescription : 'Business Profile'
  }
];

export let orderPoNumberData : Array<Array<orderPoNumber>> = [
  [
    {
      poNumber : 1,
      description :'hogwarts'
    },
    {
      poNumber : 2,
      description : 'is'
    },
    {
      poNumber : 3,
      description : 'hidden'
    }
  ],
  [
    {
      poNumber : 4,
      description :'from'
    },
    {
      poNumber : 5,
      description : 'muggle'
    },
    {
      poNumber : 6,
      description : 'sight'
    }
  ],
  [
    {
      poNumber : 7,
      description :'shh..'
    },
    {
      poNumber : 9,
      description : 'its'
    },
    {
      poNumber : 8,
      description : 'secret'
    }
  ]
];



export let ordersData : Array<orders> = [
  {
    ordID : 1760,
    orgID : 1303,
    ordContractTerm : orderContractTerms[0],
    ordCatalog : orderCatalogData[0],
    ordParameter :orderParameterData[0],
    ordContact : orderContactData[0],
    ordAgent : orderAgentData[0],
    ordProvision : orderProvisionData[0],
    ordAccountProfile : orderAccountProfileData[0],
    ordNewOrder : orderNewOrderData[0],
    ordPaymentDetail : orderPaymentDetailData[0],
    ordContractImage : orderContractImageData[0],
    ordPoNumber : orderPoNumberData[0]
  },
  {
    ordID : 1761,
    orgID : 1301,
    ordContractTerm : orderContractTerms[1],
    ordParameter : orderParameterData[1],
    ordCatalog : orderCatalogData[1],
    ordContact : orderContactData[1],
    ordAgent : orderAgentData[1],
    ordProvision : orderProvisionData[1],
    ordAccountProfile : orderAccountProfileData[1],
    ordNewOrder : orderNewOrderData[1],
    ordPaymentDetail : orderPaymentDetailData[1],
    ordContractImage : orderContractImageData[1],
    ordPoNumber : orderPoNumberData[1]
  },
  {
    ordID : 1762,
    orgID : 1304,
    ordContractTerm : orderContractTerms[2],
    ordParameter : orderParameterData[2],
    ordCatalog : orderCatalogData[2],
    ordContact : orderContactData[2],
    ordAgent : orderAgentData[2],
    ordProvision : orderProvisionData[2],
    ordAccountProfile : orderAccountProfileData[2],
    ordNewOrder : orderNewOrderData[2],
    ordPaymentDetail : orderPaymentDetailData[2],
    ordContractImage : orderContractImageData[2],
    ordPoNumber : orderPoNumberData[2]
  }
];
