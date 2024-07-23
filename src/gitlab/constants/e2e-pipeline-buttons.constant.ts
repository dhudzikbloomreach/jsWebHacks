/*
    Specific jobs docs: https://gitlab.exponea.com/e2e/e2e-tests/-/blob/master/docs/RUNNING-SPECIFIC-JOBS.md

        RUN_ALL
            true

        MODULES (separated with colon)
            app
            we
            dp
            cmp
            anl

        JOBS (separated with colon)
            anl segmentations
            anl flows
            ...

        SPEC (separated with comma)
            e.g. cypress/integration/campaigns/scenarios/scenarios.e2e.ts
            e.g. cypress/integration/campaigns/surveys/surveys.e2e.ts,cypress/integration/analytics/funnels/funnels.e2e.ts

    Private instance docs: https://gitlab.exponea.com/e2e/e2e-tests/-/blob/master/docs/PRIVATE-INSTANCES.md

        PORTAL_APP_USER
        PORTAL_APP_PASSWORD
        PORTAL_APP_URL
        PORTAL_API_URL
        PORTAL_CDN_URL
 */

export enum E2EPipelineVariableType {
    RunAll = 'RUN_ALL',
    Jobs = 'JOBS',
    Modules = 'MODULES',
    Spec = 'SPEC',
    PrivateInstanceAppUrl = 'PORTAL_APP_URL',
    PrivateInstanceApiUrl = 'PORTAL_API_URL',
    PrivateInstanceCdnUrl = 'PORTAL_CDN_URL',
    PrivateInstanceUsername = 'PORTAL_APP_USER',
    PrivateInstancePassword = 'PORTAL_APP_PASSWORD',
}

// These variables may have multiple values
export const PipelineMultipleVariableSeparators = {
    [E2EPipelineVariableType.Jobs]: ':',
    [E2EPipelineVariableType.Modules]: ':',
} as const;

type PipelineMultipleVariable = keyof typeof PipelineMultipleVariableSeparators;

export function isE2EPipelineVariable(x: string): x is E2EPipelineVariableType {
    return (Object.values(E2EPipelineVariableType) as string[]).includes(x);
}

export function isMultiValueVariable(x: string): x is PipelineMultipleVariable {
    return x in PipelineMultipleVariableSeparators;
}
export function getMultiValueVariableSeparator(x: PipelineMultipleVariable) {
    return PipelineMultipleVariableSeparators[x];
}

export interface PipelineButtonVariable {
    key: E2EPipelineVariableType;
    value: string;
}

export interface PipelineButton {
    label: string;
    variables: PipelineButtonVariable[];
    selected?: boolean;
}

export const pipelineButtons: PipelineButton[] = [
    { variables: [{ key: E2EPipelineVariableType.RunAll, value: 'true' }], label: 'Run all' },
    { variables: [{ key: E2EPipelineVariableType.Modules, value: 'app' }], label: 'App' },
    { variables: [{ key: E2EPipelineVariableType.Modules, value: 'anl' }], label: 'Analytics' },
    { variables: [{ key: E2EPipelineVariableType.Modules, value: 'cmp' }], label: 'Campaigns' },
    { variables: [{ key: E2EPipelineVariableType.Modules, value: 'dp' }], label: 'Data Pipe' },
    { variables: [{ key: E2EPipelineVariableType.Modules, value: 'we' }], label: 'Web Exp' },
    { variables: [{ key: E2EPipelineVariableType.Jobs, value: 'screenshot tests' }], label: 'Screenshot tests' },
    { variables: [{ key: E2EPipelineVariableType.Spec, value: '' }], label: 'Specific test run' },
    {
        variables: [
            { key: E2EPipelineVariableType.PrivateInstanceAppUrl, value: '' },
            { key: E2EPipelineVariableType.PrivateInstanceApiUrl, value: '' },
            { key: E2EPipelineVariableType.PrivateInstanceCdnUrl, value: '' },
            { key: E2EPipelineVariableType.PrivateInstanceUsername, value: '' },
            { key: E2EPipelineVariableType.PrivateInstancePassword, value: '' },
        ],
        label: 'Private Instance',
    },
];
