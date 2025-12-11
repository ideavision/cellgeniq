// In-memory database for development
// In production, this would be replaced with a real database (PostgreSQL, MongoDB, etc.)

import { nanoid } from 'nanoid';
import type {
  Patient,
  LeukapheresisRecord,
  ElectronicBatchRecord,
  QualityControlTest,
  QualityAssuranceReview,
  AIAnalysis,
  WorkflowEvent,
  User,
  SupplyChainItem,
  ComplianceDocument,
  WorkflowStatus
} from '../shared/types';

// In-memory storage
export const db = {
  patients: new Map<string, Patient>(),
  leukapheresisRecords: new Map<string, LeukapheresisRecord>(),
  batchRecords: new Map<string, ElectronicBatchRecord>(),
  qcTests: new Map<string, QualityControlTest>(),
  qaReviews: new Map<string, QualityAssuranceReview>(),
  aiAnalyses: new Map<string, AIAnalysis>(),
  workflowEvents: new Map<string, WorkflowEvent>(),
  users: new Map<string, User>(),
  supplyChain: new Map<string, SupplyChainItem>(),
  documents: new Map<string, ComplianceDocument>(),
};

// Helper function to generate batch numbers
export function generateBatchNumber(): string {
  const year = new Date().getFullYear();
  const month = String(new Date().getMonth() + 1).padStart(2, '0');
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `BATCH-${year}${month}${random}`;
}

// Initialize with sample data
export function initializeSampleData() {
  // Sample Users
  const users: User[] = [
    {
      id: 'user-1',
      username: 'dr.smith',
      email: 'dr.smith@cellgeniq.com',
      role: 'physician',
      firstName: 'John',
      lastName: 'Smith',
      department: 'Oncology',
      createdAt: new Date().toISOString(),
    },
    {
      id: 'user-2',
      username: 'tech.jones',
      email: 'tech.jones@cellgeniq.com',
      role: 'technician',
      firstName: 'Sarah',
      lastName: 'Jones',
      department: 'Leukapheresis',
      createdAt: new Date().toISOString(),
    },
    {
      id: 'user-3',
      username: 'mfg.chen',
      email: 'mfg.chen@cellgeniq.com',
      role: 'manufacturing_operator',
      firstName: 'Michael',
      lastName: 'Chen',
      department: 'Manufacturing',
      createdAt: new Date().toISOString(),
    },
    {
      id: 'user-4',
      username: 'qc.williams',
      email: 'qc.williams@cellgeniq.com',
      role: 'qc_analyst',
      firstName: 'Emily',
      lastName: 'Williams',
      department: 'Quality Control',
      createdAt: new Date().toISOString(),
    },
    {
      id: 'user-5',
      username: 'qa.manager',
      email: 'qa.manager@cellgeniq.com',
      role: 'qa_manager',
      firstName: 'David',
      lastName: 'Brown',
      department: 'Quality Assurance',
      createdAt: new Date().toISOString(),
    },
  ];

  users.forEach(user => db.users.set(user.id, user));

  // Sample Patients
  const patients: Patient[] = [
    {
      id: 'patient-1',
      firstName: 'Eleanor',
      lastName: 'Vance',
      dateOfBirth: '1956-03-15',
      medicalRecordNumber: 'MRN-001234',
      diagnosis: 'Multiple Myeloma',
      contactInfo: {
        email: 'eleanor.vance@email.com',
        phone: '+1-555-0101',
        address: '123 Main St, Boston, MA 02101',
      },
      assignedPhysician: 'user-1',
      status: 'manufacturing_expansion',
      createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'patient-2',
      firstName: 'Marcus',
      lastName: 'Chen',
      dateOfBirth: '1970-07-22',
      medicalRecordNumber: 'MRN-001235',
      diagnosis: 'Acute Lymphoblastic Leukemia',
      contactInfo: {
        email: 'marcus.chen@email.com',
        phone: '+1-555-0102',
        address: '456 Oak Ave, Cambridge, MA 02139',
      },
      assignedPhysician: 'user-1',
      status: 'qc_testing',
      createdAt: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'patient-3',
      firstName: 'Sarah',
      lastName: 'Johnson',
      dateOfBirth: '1982-11-08',
      medicalRecordNumber: 'MRN-001236',
      diagnosis: 'Non-Hodgkin Lymphoma',
      contactInfo: {
        email: 'sarah.johnson@email.com',
        phone: '+1-555-0103',
        address: '789 Elm St, Somerville, MA 02144',
      },
      assignedPhysician: 'user-1',
      status: 'leukapheresis_scheduled',
      createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];

  patients.forEach(patient => db.patients.set(patient.id, patient));

  // Sample Leukapheresis Records
  const leukapheresisRecords: LeukapheresisRecord[] = [
    {
      id: 'leuka-1',
      patientId: 'patient-1',
      scheduledDate: new Date(Date.now() - 28 * 24 * 60 * 60 * 1000).toISOString(),
      completedDate: new Date(Date.now() - 28 * 24 * 60 * 60 * 1000).toISOString(),
      location: 'Boston Medical Center - Apheresis Unit',
      collectionVolume: 250,
      cellCount: 2.5e9,
      viability: 98.5,
      technician: 'user-2',
      notes: 'Collection completed successfully. Patient tolerated procedure well.',
      transportDetails: {
        carrier: 'MedEx Logistics',
        trackingNumber: 'MEX-2024-001',
        departureTime: new Date(Date.now() - 28 * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000).toISOString(),
        arrivalTime: new Date(Date.now() - 27 * 24 * 60 * 60 * 1000).toISOString(),
        temperature: 4.2,
      },
      status: 'received',
      createdAt: new Date(Date.now() - 29 * 24 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 27 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'leuka-2',
      patientId: 'patient-2',
      scheduledDate: new Date(Date.now() - 23 * 24 * 60 * 60 * 1000).toISOString(),
      completedDate: new Date(Date.now() - 23 * 24 * 60 * 60 * 1000).toISOString(),
      location: 'Boston Medical Center - Apheresis Unit',
      collectionVolume: 280,
      cellCount: 3.1e9,
      viability: 97.8,
      technician: 'user-2',
      transportDetails: {
        carrier: 'MedEx Logistics',
        trackingNumber: 'MEX-2024-002',
        departureTime: new Date(Date.now() - 23 * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000).toISOString(),
        arrivalTime: new Date(Date.now() - 22 * 24 * 60 * 60 * 1000).toISOString(),
        temperature: 4.0,
      },
      status: 'received',
      createdAt: new Date(Date.now() - 24 * 24 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 22 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'leuka-3',
      patientId: 'patient-3',
      scheduledDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
      location: 'Boston Medical Center - Apheresis Unit',
      technician: 'user-2',
      status: 'scheduled',
      createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    },
  ];

  leukapheresisRecords.forEach(record => db.leukapheresisRecords.set(record.id, record));

  // Sample Batch Records
  const batchRecords: ElectronicBatchRecord[] = [
    {
      id: 'batch-1',
      batchNumber: 'BATCH-202403001',
      patientId: 'patient-1',
      leukapheresisId: 'leuka-1',
      productType: 'CAR-T',
      status: 'expansion',
      stages: {
        reception: {
          receivedDate: new Date(Date.now() - 27 * 24 * 60 * 60 * 1000).toISOString(),
          receivedBy: 'user-3',
          initialCellCount: 2.5e9,
          initialViability: 98.5,
          notes: 'Sample received in good condition. Temperature maintained during transport.',
        },
        processing: {
          startDate: new Date(Date.now() - 26 * 24 * 60 * 60 * 1000).toISOString(),
          endDate: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toISOString(),
          operator: 'user-3',
          method: 'Magnetic bead selection',
          notes: 'T-cell isolation completed successfully.',
        },
        expansion: {
          startDate: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toISOString(),
          targetCellCount: 5e9,
          currentCellCount: 3.8e9,
          passageNumber: 3,
          mediaType: 'X-VIVO 15 with IL-2',
          notes: 'Expansion progressing as expected. Cell viability remains high.',
        },
      },
      monitoring: {
        temperature: [37.0, 37.1, 36.9, 37.0, 37.2, 37.0],
        pH: [7.4, 7.4, 7.3, 7.4, 7.4, 7.4],
        dissolvedOxygen: [21.0, 20.8, 21.2, 21.0, 20.9, 21.1],
        cellDensity: [1.2e6, 1.8e6, 2.5e6, 3.2e6, 3.8e6, 4.2e6],
        timestamps: [
          new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
          new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
          new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
          new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
          new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
          new Date().toISOString(),
        ],
      },
      equipment: {
        bioreactorId: 'BR-001',
        incubatorId: 'INC-003',
        centrifugeId: 'CENT-002',
      },
      createdAt: new Date(Date.now() - 27 * 24 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'batch-2',
      batchNumber: 'BATCH-202403002',
      patientId: 'patient-2',
      leukapheresisId: 'leuka-2',
      productType: 'CAR-T',
      status: 'completed',
      stages: {
        reception: {
          receivedDate: new Date(Date.now() - 22 * 24 * 60 * 60 * 1000).toISOString(),
          receivedBy: 'user-3',
          initialCellCount: 3.1e9,
          initialViability: 97.8,
        },
        processing: {
          startDate: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(),
          endDate: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
          operator: 'user-3',
          method: 'Magnetic bead selection',
        },
        expansion: {
          startDate: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
          endDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
          targetCellCount: 5e9,
          currentCellCount: 5.2e9,
          passageNumber: 4,
          mediaType: 'X-VIVO 15 with IL-2',
        },
        harvesting: {
          harvestDate: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000).toISOString(),
          finalCellCount: 5.2e9,
          finalViability: 96.5,
          operator: 'user-3',
        },
        formulation: {
          formulationDate: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
          finalVolume: 50,
          concentration: 1e8,
          cryoprotectant: 'DMSO 10%',
          operator: 'user-3',
        },
      },
      monitoring: {
        temperature: [37.0, 37.1, 37.0, 37.0],
        pH: [7.4, 7.4, 7.4, 7.3],
        dissolvedOxygen: [21.0, 20.9, 21.1, 21.0],
        cellDensity: [1.5e6, 2.8e6, 4.2e6, 5.2e6],
        timestamps: [
          new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
          new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
          new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
          new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
        ],
      },
      equipment: {
        bioreactorId: 'BR-002',
        incubatorId: 'INC-001',
        centrifugeId: 'CENT-001',
      },
      createdAt: new Date(Date.now() - 22 * 24 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
    },
  ];

  batchRecords.forEach(record => db.batchRecords.set(record.id, record));

  // Sample QC Tests
  const qcTests: QualityControlTest[] = [
    {
      id: 'qc-1',
      batchId: 'batch-2',
      testType: 'sterility',
      status: 'passed',
      scheduledDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      completedDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
      performedBy: 'user-4',
      results: {
        acceptanceCriteria: 'No growth after 14 days',
        actualResult: 'No growth detected',
        interpretation: 'pass',
      },
      instrumentId: 'BACT-001',
      methodReference: 'USP <71>',
      createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'qc-2',
      batchId: 'batch-2',
      testType: 'viability',
      status: 'passed',
      scheduledDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      completedDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      performedBy: 'user-4',
      results: {
        value: 96.5,
        unit: '%',
        acceptanceCriteria: '≥ 70%',
        actualResult: '96.5%',
        interpretation: 'pass',
      },
      instrumentId: 'FLOW-001',
      methodReference: 'SOP-QC-002',
      createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'qc-3',
      batchId: 'batch-2',
      testType: 'endotoxin',
      status: 'passed',
      scheduledDate: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
      completedDate: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
      performedBy: 'user-4',
      results: {
        value: 0.25,
        unit: 'EU/mL',
        acceptanceCriteria: '< 5 EU/mL',
        actualResult: '0.25 EU/mL',
        interpretation: 'pass',
      },
      instrumentId: 'LAL-001',
      methodReference: 'USP <85>',
      createdAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
    },
  ];

  qcTests.forEach(test => db.qcTests.set(test.id, test));

  // Sample QA Reviews
  const qaReviews: QualityAssuranceReview[] = [
    {
      id: 'qa-1',
      batchId: 'batch-2',
      reviewType: 'final_release',
      status: 'approved',
      reviewer: 'user-5',
      reviewDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      checklist: [
        { item: 'Batch record complete and accurate', status: 'verified' },
        { item: 'All QC tests passed', status: 'verified' },
        { item: 'Equipment calibration current', status: 'verified' },
        { item: 'Environmental monitoring acceptable', status: 'verified' },
        { item: 'Personnel training current', status: 'verified' },
        { item: 'Deviations reviewed and closed', status: 'verified' },
      ],
      decision: {
        approved: true,
        approvedBy: 'user-5',
        approvalDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
        comments: 'All release criteria met. Batch approved for patient administration.',
        releaseDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      },
      createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    },
  ];

  qaReviews.forEach(review => db.qaReviews.set(review.id, review));

  console.log('✅ Sample data initialized');
  console.log(`   - ${db.patients.size} patients`);
  console.log(`   - ${db.leukapheresisRecords.size} leukapheresis records`);
  console.log(`   - ${db.batchRecords.size} batch records`);
  console.log(`   - ${db.qcTests.size} QC tests`);
  console.log(`   - ${db.qaReviews.size} QA reviews`);
}
