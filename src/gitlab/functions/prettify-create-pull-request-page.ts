export function prettifyCreatePullRequestPage() {
    // Title
    const titleElement: HTMLInputElement | null = document.querySelector('.form-control.qa-issuable-form-title');
    if (titleElement) {
        const titleRegex = /Resolve (.*?) \"(.*?)\"/g;
        const titleRegexMatch = titleRegex.exec(titleElement.value);
        if (titleRegexMatch && titleRegexMatch.length === 3) {
            titleElement.value = `${titleRegexMatch[1]} ${titleRegexMatch[2]}`;
        }
    }

    // Labels
    $('.qa-issuable-label').trigger('click');
    $('.qa-issuable-label').trigger('click');

    if ($('#MONAR_CUSTOM_LABEL_BUTTONS').length === 0) {
        $('.qa-issuable-label').closest('.col-sm-10').append(`
            <div id="MONAR_CUSTOM_LABEL_BUTTONS"
                style="
                    display: inline-block;
                    margin-left: 25px;
                    max-width: 500px;
                    vertical-align: top;
                    "
            ></div>
        `);
        createLabelButtons();
    }
}

function markSelectedLabels() {
    const selectedLabelIds: string[] = [];
    $('.qa-issuable-label').closest('.issuable-form-select-holder').find('input[type="hidden"]').each(function() {
        selectedLabelIds.push($(this).attr('value') || '');
    });

    $('[data-monar="CUSTOM_LABEL_BUTTON"]').each(function() {
        const id = $(this).attr('data-id') || '-';
        if (selectedLabelIds.includes(id)) {
            $(this).css('opacity', 1);
            $('span', this).css('border-color', 'rgba(0,0,0,0.8)');
        } else {
            $(this).css('opacity', 0.5);
            $('span', this).css('border-color', 'transparent');
        }
    });
}

function createLabelButtons() {
    let tries = 0;

    setTimeout(() => {
        if ($('.dropdown-menu-labels .label-item').length === 0) {
            tries++;
            if (tries < 20) {
                createLabelButtons();
            }
            return;
        }

        $('.dropdown-menu-labels .label-item').each(function() {
            const name = $(this).text().trim();
            const color = $('span', this).attr('style');
            const id = $(this).attr('data-label-id');

            const html = `
                <a class="label-link" data-id="${id}" data-monar="CUSTOM_LABEL_BUTTON" style="cursor: pointer; margin-bottom: 10px; margin-right: 5px;">
                    <span class="badge color-label" style="${color}; height: 26px; line-height: 22px; border: 3px solid transparent;">
                        ${name}
                    </span>
                </a>
            `;

            $('#MONAR_CUSTOM_LABEL_BUTTONS').append(html);
            $(`[data-id="${id}"][data-monar="CUSTOM_LABEL_BUTTON"]`).on('click', () => {
                $(`.dropdown-menu-labels .label-item[data-label-id="${id}"]`).trigger('click');
                markSelectedLabels();
            });
        });

        markSelectedLabels();
    }, 50);
}
