export const changelogNotes = [
    {
        date: '18.12.2020',
        text: `
<h1>Changes</h1>
<ul>
    <li>Support for Draft MRs</li>
</ul>
<h1>Known issues</h1>
<ul>
    <li>E2E pipelines: Selecting predefined variables is buggy in some cases (buttons with multiple variables assigned, clicking to remove variable)</li>
    <li>E2E pipelines: Changing branch deletes all set variables</li>
    <li>Commit approvals: Whole feature has to be retested with new gitlab comments</li>
    <li>Commit approvals: Clicking on show next/previous commit bugs the Approve commit button</li>
</ul>
        `,
    },
    {
        date: '16.12.2020',
        text: `
<h1>Changes</h1>
<ul>
    <li>Initial fixes for new gitlab version</li>
</ul>
        `,
    },
    {
        date: '13.10.2020',
        text: `
<h1>Changes</h1>
<ul>
    <li><b>E2E only:</b> Pipeline variables now can be toggled and support multi-value strings</li>
</ul>
        `,
    },
    {
        date: '04.08.2020',
        text: `
<h1>Changes</h1>
<ul>
    <li><b>E2E only:</b> More pipeline variable options added</li>
</ul>
        `,
    },
    {
        date: '27.07.2020',
        text: `
<h1>Changes</h1>
<ul>
    <li>Improvements for running E2E pipeline from FE repo</li>
    <li>Improvements for specifying E2E pipeline variables</li>
</ul>
        `,
    },
    {
        date: '26.07.2020',
        text: `
<h1>Changes</h1>
<ul>
    <li>Fixed task count shown in merge request list</li>
</ul>
        `,
    },

    {
        date: '04.07.2020',
        text: `
<h1>Changes</h1>
<ul>
    <li>Nightly pipeline badges brought back to action</li>
</ul>
        `,
    },
    {
        date: '26.06.2020',
        text: `
<h1>Changes</h1>
<ul>
    <li><b>FE only:</b> Automatically set "No. approvals required" based on labels</li>
</ul>
        `,
    },
    {
        date: '25.05.2020',
        text: `
<h1>Changes</h1>
<ul>
    <li>New branching strategy is here</li>
    <li>The goose has been captured and moved to a pond</li>
</ul>
        `,
    },
    {
        date: '16.03.2020',
        text: `
<h1>Bugfixes</h1>
<ul>
    <li>Attempt to fix approve button after gitlab update</li>
</ul>
        `,
    },
    {
        date: '22.01.2020',
        text: `
<h1>Bugfixes</h1>
<ul>
    <li>Nightly pipeline badges used by FE repository should be working correctly again</li>
</ul>
        `,
    },
    {
        date: '18.01.2020',
        text: `
<h1>Commit approvals</h1>
<p>
    You can now approve separate commits in Merge Request.
</p>
<p>
    Please use this just a simple helping tool and do not rely on it for actual code review. For proper MR approving still use the actual gitlab approve button.
</p>
        `,
    },
] as const;
