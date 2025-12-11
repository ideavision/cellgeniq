// Shared types for CellGeniq Platform

export type WorkflowStatus = 
  | 'patient_intake'
  | 'leukapheresis_scheduled'
  | 'leukapheresis_completed'
  | 'transport_to_manufacturing'
  | 'manufacturing_received'
  | 'manufacturing_processing'
  | 'manufacturing_expansion'
  | 'qc_testing'
  | 'qc_passed'
  | 'qc_failed'
  | 'qa_review'
  | 'qa_approved'
  | 'qa_rejected'
  | 'ready_for_infusion'
  | 'infusion_completed';

export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  medicalRecordNumber: string;
  diagnosis: string;
  contactInfo: {
    email: string;
    phone: string;
    address: string;
  };
  assignedPhysician: string;
  status: WorkflowStatus;
  createdAt: string;
  updatedAt: string;
}

export interface LeukapheresisRecord {
  id: string;
  patientId: string;
  scheduledDate: string;
  completedDate?: string;
  location: string;
  collectionVolume?: number; // in mL
  cellCount?: number;
  viability?: number; // percentage
  technician: string;
  notes?: string;
  transportDetails?: {
    carrier: string;
    trackingNumber: string;
    departureTime?: string;
    arrivalTime?: string;
    temperature?: number;
  };
  status: 'scheduled' | 'in_progress' | 'completed' | 'in_transit' | 'received';
  createdAt: string;
  updatedAt: string;
}

export interface ElectronicBatchRecord {
  id: string;
  batchNumber: string;
  patientId: string;
  leukapheresisId: string;
  productType: 'CAR-T' | 'TCR-T' | 'NK Cell' | 'TIL' | 'MSC';
  status: 'received' | 'processing' | 'expansion' | 'harvesting' | 'formulation' | 'completed';
  
  // Manufacturing stages
  stages: {
    reception: {
      receivedDate?: string;
      receivedBy?: string;
      initialCellCount?: number;
      initialViability?: number;
      notes?: string;
    };
    processing: {
      startDate?: string;
      endDate?: string;
      operator?: string;
      method?: string;
      notes?: string;
    };
    expansion: {
      startDate?: string;
      endDate?: string;
      targetCellCount?: number;
      currentCellCount?: number;
      passageNumber?: number;
      mediaType?: string;
      notes?: string;
    };
    harvesting: {
      harvestDate?: string;
      finalCellCount?: number;
      finalViability?: number;
      operator?: string;
      notes?: string;
    };
    formulation: {
      formulationDate?: string;
      finalVolume?: number;
      concentration?: number;
      cryoprotectant?: string;
      operator?: string;
      notes?: string;
    };
  };
  
  // Real-time monitoring data
  monitoring: {
    temperature: number[];
    pH: number[];
    dissolvedOxygen: number[];
    cellDensity: number[];
    timestamps: string[];
  };
  
  // Equipment used
  equipment: {
    bioreactorId?: string;
    incubatorId?: string;
    centrifugeId?: string;
    other?: string[];
  };
  
  createdAt: string;
  updatedAt: string;
}

export interface QualityControlTest {
  id: string;
  batchId: string;
  testType: 
    | 'sterility'
    | 'mycoplasma'
    | 'endotoxin'
    | 'viability'
    | 'potency'
    | 'identity'
    | 'purity';
  status: 'pending' | 'in_progress' | 'passed' | 'failed' | 'inconclusive';
  scheduledDate: string;
  completedDate?: string;
  performedBy?: string;
  
  // Test results
  results?: {
    value?: number | string;
    unit?: string;
    acceptanceCriteria: string;
    actualResult: string;
    interpretation: 'pass' | 'fail' | 'inconclusive';
  };
  
  // Supporting data
  instrumentId?: string;
  methodReference?: string;
  rawData?: any;
  notes?: string;
  
  createdAt: string;
  updatedAt: string;
}

export interface QualityAssuranceReview {
  id: string;
  batchId: string;
  reviewType: 'batch_record' | 'qc_results' | 'deviation' | 'final_release';
  status: 'pending' | 'in_review' | 'approved' | 'rejected' | 'on_hold';
  
  reviewer?: string;
  reviewDate?: string;
  
  // Checklist items
  checklist: {
    item: string;
    status: 'pending' | 'verified' | 'failed';
    comments?: string;
  }[];
  
  // Deviations
  deviations?: {
    id: string;
    description: string;
    severity: 'minor' | 'major' | 'critical';
    rootCause?: string;
    correctiveAction?: string;
    status: 'open' | 'resolved';
  }[];
  
  // Final decision
  decision?: {
    approved: boolean;
    approvedBy: string;
    approvalDate: string;
    comments: string;
    releaseDate?: string;
  };
  
  createdAt: string;
  updatedAt: string;
}

export interface AIAnalysis {
  id: string;
  entityId: string; // Can be patientId, batchId, etc.
  entityType: 'patient' | 'batch' | 'qc_test';
  analysisType: 
    | 'treatment_recommendation'
    | 'process_optimization'
    | 'quality_prediction'
    | 'risk_assessment'
    | 'anomaly_detection';
  
  confidence: number; // 0-100
  
  findings: {
    summary: string;
    details: string[];
    recommendations: string[];
  };
  
  data?: any; // Supporting data used for analysis
  
  createdAt: string;
}

export interface WorkflowEvent {
  id: string;
  patientId: string;
  batchId?: string;
  eventType: string;
  status: WorkflowStatus;
  description: string;
  performedBy: string;
  metadata?: any;
  timestamp: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  role: 'physician' | 'technician' | 'qc_analyst' | 'qa_manager' | 'manufacturing_operator' | 'admin';
  firstName: string;
  lastName: string;
  department: string;
  createdAt: string;
}

export interface SupplyChainItem {
  id: string;
  name: string;
  category: 'raw_material' | 'reagent' | 'consumable' | 'equipment';
  currentStock: number;
  unit: string;
  reorderLevel: number;
  reorderQuantity: number;
  supplier: string;
  lotNumber?: string;
  expirationDate?: string;
  status: 'in_stock' | 'low_stock' | 'out_of_stock' | 'expired';
  lastUpdated: string;
}

export interface ComplianceDocument {
  id: string;
  documentType: 'SOP' | 'batch_record' | 'protocol' | 'report' | 'certificate';
  title: string;
  version: string;
  status: 'draft' | 'under_review' | 'approved' | 'archived';
  approvedBy?: string;
  approvalDate?: string;
  effectiveDate?: string;
  nextReviewDate?: string;
  filePath: string;
  createdAt: string;
  updatedAt: string;
}
