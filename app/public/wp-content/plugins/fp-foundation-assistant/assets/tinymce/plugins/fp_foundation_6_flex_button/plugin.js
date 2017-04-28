
(function() {
    tinymce.PluginManager.add('fp_foundation_6_flex_button', function( editor, url ) {
        editor.addButton( 'fp_foundation_6_flex_button', {
            title: fp_foundation_assistant_localized_script.button_shortcodes,
            type: 'menubutton',
            icon: 'icon fp-icon-01',
            menu: [
             {
                text: fp_foundation_assistant_localized_script.grid,
                menu: [
                {
                    text: fp_foundation_assistant_localized_script.flex_grid,
                    onclick: function() {
                        editor.windowManager.open( {
                            title: fp_foundation_assistant_localized_script.flex_grid,
                            width : 500,
                            height: 520,
                            body: [{
                                type: 'listbox', 
                                name: 'columns', 
                                label: fp_foundation_assistant_localized_script.no_of_columns, 
                                'values': [
                                    {text: fp_foundation_assistant_localized_script.one, value: '1'},
                                    {text: fp_foundation_assistant_localized_script.two, value: '2'},
                                    {text: fp_foundation_assistant_localized_script.three, value: '3'},
                                    {text: fp_foundation_assistant_localized_script.four, value: '4'},
                                    {text: fp_foundation_assistant_localized_script.five, value: '5'},
                                    {text: fp_foundation_assistant_localized_script.six, value: '6'},
                                    {text: fp_foundation_assistant_localized_script.seven, value: '7'},
                                    {text: fp_foundation_assistant_localized_script.eight, value: '8'},
                                    {text: fp_foundation_assistant_localized_script.nine, value: '9'},
                                    {text: fp_foundation_assistant_localized_script.ten, value: '10'},
                                    {text: fp_foundation_assistant_localized_script.eleven, value: '11'},
                                    {text: fp_foundation_assistant_localized_script.twelve, value: '12'},
                                ]
                            },{
                                type: 'listbox', 
                                name: 'small_collapse', 
                                label: fp_foundation_assistant_localized_script.small_un_collapse, 
                                'values': [
                                    {text: fp_foundation_assistant_localized_script.none, value: ''},
                                    {text: fp_foundation_assistant_localized_script.small_collapse, value: "small_collapse='true'"},
                                    {text: fp_foundation_assistant_localized_script.small_uncollapse, value: "small_uncollapse='true'"},
                                ]
                            },{
                                type: 'listbox', 
                                name: 'medium_collapse', 
                                label: fp_foundation_assistant_localized_script.medium_un_collapse, 
                                'values': [
                                    {text: fp_foundation_assistant_localized_script.none, value: ''},
                                    {text: fp_foundation_assistant_localized_script.medium_collapse, value: "medium_collapse='true'"},
                                    {text: fp_foundation_assistant_localized_script.medium_uncollapse, value: "medium_uncollapse='true'"},
                                ]
                            },{
                                type: 'listbox', 
                                name: 'large_collapse', 
                                label: fp_foundation_assistant_localized_script.large_un_collapse, 
                                'values': [
                                    {text: fp_foundation_assistant_localized_script.none, value: ''},
                                    {text: fp_foundation_assistant_localized_script.large_collapse, value: "large_collapse='true'"},
                                    {text: fp_foundation_assistant_localized_script.large_uncollapse, value: "large_uncollapse='true'"},
                                ]
                            },{
                                type: 'listbox', 
                                name: 'horizontal_align', 
                                label: fp_foundation_assistant_localized_script.horizontal_align, 
                                'values': [
                                    {text: fp_foundation_assistant_localized_script.none, value: ''},
                                    {text: fp_foundation_assistant_localized_script.align_right, value: "horizontal_align='right'"},
                                    {text: fp_foundation_assistant_localized_script.align_left, value: "horizontal_align='left'"},
                                    {text: fp_foundation_assistant_localized_script.align_center, value: "horizontal_align='center'"},
                                    {text: fp_foundation_assistant_localized_script.align_justify, value: "horizontal_align='justify'"},
                                    {text: fp_foundation_assistant_localized_script.align_spaced, value: "horizontal_align='spaced'"}
                                ]
                            },{
                                type: 'listbox', 
                                name: 'vertical_align', 
                                label: fp_foundation_assistant_localized_script.vertical_align, 
                                'values': [
                                    {text: fp_foundation_assistant_localized_script.none, value: ''},
                                    {text: fp_foundation_assistant_localized_script.align_top, value: "vertical_align='top'"},
                                    {text: fp_foundation_assistant_localized_script.align_middle, value: "vertical_align='middle'"},
                                    {text: fp_foundation_assistant_localized_script.align_bottom, value: "vertical_align='bottom'"},
                                    {text: fp_foundation_assistant_localized_script.align_stretch, value: "vertical_align='stretch'"},
                                ]
                            },{
                                type: 'listbox', 
                                name: 'responsive_adjustments', 
                                label: fp_foundation_assistant_localized_script.responsive_adjustments, 
                                'values': [
                                    {text: fp_foundation_assistant_localized_script.none, value: ''},
                                    {text: fp_foundation_assistant_localized_script.medium_expand, value: "medium_expand='true'"},
                                    {text: fp_foundation_assistant_localized_script.large_expand, value: "large_expand='true'"},
                                    {text: fp_foundation_assistant_localized_script.medium_unstack, value: "medium_unstack='true'"},
                                    {text: fp_foundation_assistant_localized_script.large_unstack, value: "large_unstack='true'"},
                                ]
                            },{
                                type: 'listbox', 
                                name: 'equalizer', 
                                label: fp_foundation_assistant_localized_script.equalizer, 
                                'values': [
                                    {text: fp_foundation_assistant_localized_script.none, value: ''},
                                    {text: fp_foundation_assistant_localized_script.equalizer, value: "equalizer='true'"},
                                    {text: fp_foundation_assistant_localized_script.row_equalizer,  value: "row_equalizer='true'"},
                                ]
                            },{
                                type: 'checkbox',
                                name: 'offsets',
                                text: fp_foundation_assistant_localized_script.offsets,  
                                classes: 'fp-checkbox'                
                            },{
                                type: 'checkbox',
                                name: 'source_ordering',
                                text: fp_foundation_assistant_localized_script.source_ordering,  
                                classes: 'fp-checkbox'                  
                            },{
                                type: 'checkbox',
                                name: 'block_grids',
                                text: fp_foundation_assistant_localized_script.block_grids,     
                                classes: 'fp-checkbox'                    
                            },{
                                type: 'checkbox',
                                name: 'collapse',
                                text: fp_foundation_assistant_localized_script.collapse,     
                                classes: 'fp-checkbox'                    
                            },{
                                type: 'checkbox',
                                name: 'shrink',
                                text: fp_foundation_assistant_localized_script.shrink,     
                                classes: 'fp-shrink-flex'                    
                            }],


                            onsubmit: function( e ) {
                                var fp_row_classes= new Array();
                                var fp_column_classes = new Array();
                                    
                                if( e.data.offsets === true) { fp_column_classes.push( "small_offset='' medium_offset='' large_offset=''"); } 
                                if( e.data.source_ordering === true) { fp_column_classes.push("small_order='' medium_order='' large_order=''"); } 
                                if( e.data.block_grids === true) { fp_row_classes.push( "small_up='' medium_up='' large_up=''"); } 
                                if( e.data.collapse === true) { fp_row_classes.push( "collapse='true'"); } 
                                if( e.data.shrink === true) { fp_column_classes.push( "shrink='true'"); } 
                                if( e.data.equalizer.length !== 0 ) { fp_row_classes.push( e.data.equalizer ); }
                                if( e.data.small_collapse.length !== 0 ) { fp_row_classes.push( e.data.small_collapse ); }
                                if( e.data.medium_collapse.length !== 0 ) { fp_row_classes.push( e.data.medium_collapse ); }
                                if( e.data.large_collapse.length !== 0 ) { fp_row_classes.push( e.data.large_collapse ); }
                                if( e.data.horizontal_align.length !== 0 ) { fp_row_classes.push( e.data.horizontal_align ); }
                                if( e.data.vertical_align.length !== 0 ) { fp_column_classes.push( e.data.vertical_align ); }
                                
                                if (( e.data.responsive_adjustments == "medium_unstack='true'") || ( e.data.responsive_adjustments == "large_unstack='true'")) {
                                    if( e.data.responsive_adjustments.length !== 0 ) { fp_row_classes.push( e.data.responsive_adjustments ); }
                                }

                                if (( e.data.responsive_adjustments == "medium_expand='true'") || ( e.data.responsive_adjustments == "large_expand='true'")) {
                                    if( e.data.responsive_adjustments.length !== 0 ) { fp_column_classes.push( e.data.responsive_adjustments ); }
                                }

                                if ( fp_column_classes.length !== 0 ) { fp_column_classes = ' ' + fp_column_classes.join( " " ); }
                                if ( fp_row_classes.length !== 0 ) { fp_row_classes = ' ' + fp_row_classes.join( " " ); }                                
                                
                                var rawTemplate = "[fp-rows{{row_classes}}]<br>";

                                for (var i = 0; i < e.data.columns; i++) {
                                        var columns = i + 1;
                                        rawTemplate += "[fp-columns small='' medium='' large='' {{column_classes}}][/fp-columns]<br>";                                    
                                    } 

                                rawTemplate += '[/fp-rows]<br>';  
                                rawTemplate += '&nbsp;';

                                var compiledTemplate = Handlebars.compile(rawTemplate); 
                                editor.insertContent(compiledTemplate({ 
                                    row_classes: fp_row_classes,
                                    column_classes: fp_column_classes,   
                                }));

                            }
                        });
                    }
                },
                {
                    text: fp_foundation_assistant_localized_script.visibility_classes,
                    onclick: function() {
                        editor.windowManager.open( {
                            title: fp_foundation_assistant_localized_script.visibility_classes,
                            width : 500,
                            height: 240,
                            body: [{
                                type: 'listbox', 
                                name: 'small_size', 
                                label: fp_foundation_assistant_localized_script.small_visibility, 
                                'values': [
                                    {text: fp_foundation_assistant_localized_script.none, value: ''},
                                    {text: fp_foundation_assistant_localized_script.show_small_only, value: "show_small_only='true'"},
                                    {text: fp_foundation_assistant_localized_script.hide_small_only, value: "hide_small_only='true'"},
                                ]
                            },{
                                type: 'listbox', 
                                name: 'medium_size', 
                                label: fp_foundation_assistant_localized_script.medium_visibility, 
                                'values': [
                                    {text: fp_foundation_assistant_localized_script.none, value: ''},
                                    {text: fp_foundation_assistant_localized_script.show_medium, value: "show_medium='true'"},
                                    {text: fp_foundation_assistant_localized_script.show_medium_only, value: "show_medium_only='true'"},
                                    {text: fp_foundation_assistant_localized_script.hide_medium, value: "hide_medium='true'"},
                                    {text: fp_foundation_assistant_localized_script.hide_medium_only, value: "hide_medium_only='true'"},
                                ]
                            },{
                                type: 'listbox', 
                                name: 'large_size', 
                                label: fp_foundation_assistant_localized_script.large_visibility, 
                                'values': [
                                    {text: fp_foundation_assistant_localized_script.none, value: ''},
                                    {text: fp_foundation_assistant_localized_script.show_large, value: "show_large='true'"},
                                    {text: fp_foundation_assistant_localized_script.show_large_only, value: "show_large_only='true'"},
                                    {text: fp_foundation_assistant_localized_script.hide_large, value: "hide_large='true'"},
                                    {text: fp_foundation_assistant_localized_script.hide_large_only, value: "hide_large_only='true'"},
                                ]
                            },{
                                type: 'listbox', 
                                name: 'orientation', 
                                label: fp_foundation_assistant_localized_script.orientation, 
                                'values': [
                                    {text: fp_foundation_assistant_localized_script.none, value: ''},
                                    {text: fp_foundation_assistant_localized_script.show_portrait, value: "show_portrait='true'"},
                                    {text: fp_foundation_assistant_localized_script.show_landscape, value: "show_landscape='true'"},
                                ]
                            },{
                                type: 'listbox', 
                                name: 'accessibility', 
                                label: fp_foundation_assistant_localized_script.accessibility, 
                                'values': [
                                    {text: fp_foundation_assistant_localized_script.none, value: ''},
                                    {text: fp_foundation_assistant_localized_script.show_sr, value: "show_sr='true'"},
                                ]
                            }],

                            onsubmit: function( e ) {

                                var fp_visible_classes = new Array();

                                fp_visible_classes.push( 
                                    e.data.orientation, 
                                    e.data.small_size, 
                                    e.data.medium_size, 
                                    e.data.large_size,
                                    e.data.accessibility
                                );

                                if ( fp_visible_classes.length !== 0 ) { fp_visible_classes = ' ' + fp_visible_classes.join( " " ); }
                                
                                var rawTemplate = '[fp-visible{{visible_classes}}]';
                                rawTemplate += '[/fp-visible]<br>';  
                                rawTemplate += '&nbsp;';

                                var compiledTemplate = Handlebars.compile(rawTemplate); 
                                editor.insertContent(compiledTemplate({ 
                                     visible_classes: fp_visible_classes,
                                }));

                            }
                        });
                    }
                },
                {
                    text: fp_foundation_assistant_localized_script.float_classes,
                    onclick: function() {
                        editor.windowManager.open( {
                            title: fp_foundation_assistant_localized_script.float_classes,
                            width : 300,
                            height: 90,
                            body: [{
                                type: 'listbox', 
                                name: 'float_classes', 
                                label: fp_foundation_assistant_localized_script.element_float, 
                                'values': [
                                    {text: fp_foundation_assistant_localized_script.float_left, value: "float='left'"},
                                    {text: fp_foundation_assistant_localized_script.float_right, value: "float='right'"},
                                    {text: fp_foundation_assistant_localized_script.float_center, value: "float='center'"},
                                ]
                            }],

                            onsubmit: function( e ) {

                                var fp_float_classes = new Array();

                                if( e.data.float_classes.length !== 0 ) { fp_float_classes.push( e.data.float_classes ); }

                                if ( fp_float_classes.length !== 0 ) { fp_float_classes = ' ' + fp_float_classes.join( " " ); } 
                                
                                var rawTemplate = '[fp-float{{float_classes}}]';
                                rawTemplate += '[/fp-float]<br>';  
                                rawTemplate += '&nbsp;';

                                var compiledTemplate = Handlebars.compile(rawTemplate); 
                                editor.insertContent(compiledTemplate({ 
                                     float_classes: fp_float_classes,
                                }));

                            }
                        });
                    }
                }]   
            },{
                text: fp_foundation_assistant_localized_script.tabs_accordions,
                menu: [
                {
                    text: fp_foundation_assistant_localized_script.tabs,
                    onclick: function() {
                        editor.windowManager.open( {
                            title: fp_foundation_assistant_localized_script.no_of_tabs,
                            width : 300,
                            height: 120,
                            body: [{
                                type: 'listbox', 
                                name: 'level', 
                                label: fp_foundation_assistant_localized_script.tabs, 
                                'values': [
                                    {text: fp_foundation_assistant_localized_script.one, value: '1'},
                                    {text: fp_foundation_assistant_localized_script.two, value: '2'},
                                    {text: fp_foundation_assistant_localized_script.three, value: '3'},
                                    {text: fp_foundation_assistant_localized_script.four, value: '4'},
                                    {text: fp_foundation_assistant_localized_script.five, value: '5'},
                                    {text: fp_foundation_assistant_localized_script.six, value: '6'},
                                    {text: fp_foundation_assistant_localized_script.seven, value: '7'},
                                    {text: fp_foundation_assistant_localized_script.eight, value: '8'},
                                    {text: fp_foundation_assistant_localized_script.nine, value: '9'},
                                    {text: fp_foundation_assistant_localized_script.ten, value: '10'}
                                ]
                            }, {
                                type: 'listbox', 
                                name: 'type', 
                                label: fp_foundation_assistant_localized_script.tabs_type, 
                                'values': [
                                    {text: fp_foundation_assistant_localized_script.type_horizontal_tabs, value: ''},
                                    {text: fp_foundation_assistant_localized_script.type_vertical_tabs, value: "vertical='true'"}                                    
                                ]
                            }],
                            onsubmit: function( e ) {

                                var fp_tabs_classes = new Array();

                                if( e.data.type.length !== 0 ) { fp_tabs_classes.push( e.data.type ); }

                                if ( fp_tabs_classes.length !== 0 ) { fp_tabs_classes = ' ' + fp_tabs_classes.join( " " ); }

                                var rawTemplate = '[fp-tabs{{tabs_classes}}]<br>'; 

                                for (var i = 0; i < e.data.level; i++) {
                                    var tab = i + 1;
                                   
                                    if (tab === 1) {
                                    rawTemplate += "[fp-tab open='true' title='{{title}} "+ tab +"']{{content}} "+ tab +"[/fp-tab]<br>";}
                                    else {rawTemplate += "[fp-tab title='{{title}} "+ tab +"']{{content}} "+ tab +"[/fp-tab]<br>";}                                     
                                } 

                                rawTemplate += '[/fp-tabs]<br>';
                                rawTemplate += '&nbsp;';

                                var compiledTemplate = Handlebars.compile(rawTemplate); 

                                editor.insertContent(compiledTemplate({ 
                                    title: fp_foundation_assistant_localized_script.element_title,
                                    content: fp_foundation_assistant_localized_script.tab_content, 
                                    tabs_classes: fp_tabs_classes, 
                                }));                  
                                
                            }
                        });
                    }
                },
                {   
                    text: fp_foundation_assistant_localized_script.accordion,
                    onclick: function() {
                        editor.windowManager.open( {
                            title: fp_foundation_assistant_localized_script.no_of_items,
                            width : 300,
                            height:100,
                            body: [{
                                type: 'listbox',                                 
                                name: 'level', 
                                label: fp_foundation_assistant_localized_script.items, 
                                'values': [
                                    {text: fp_foundation_assistant_localized_script.one, value: '1'},
                                    {text: fp_foundation_assistant_localized_script.two, value: '2'},
                                    {text: fp_foundation_assistant_localized_script.three, value: '3'},
                                    {text: fp_foundation_assistant_localized_script.four, value: '4'},
                                    {text: fp_foundation_assistant_localized_script.five, value: '5'},
                                    {text: fp_foundation_assistant_localized_script.six, value: '6'},
                                    {text: fp_foundation_assistant_localized_script.seven, value: '7'},
                                    {text: fp_foundation_assistant_localized_script.eight, value: '8'},
                                    {text: fp_foundation_assistant_localized_script.nine, value: '9'},
                                    {text: fp_foundation_assistant_localized_script.ten, value: '10'}
                                ]
                            },
                            {
                                type: 'listbox', 
                                name: 'option', 
                                label: fp_foundation_assistant_localized_script.element_options, 
                                'values': [
                                    {text: fp_foundation_assistant_localized_script.basic, value: '1'},
                                    {text: fp_foundation_assistant_localized_script.multiexpand, value: '2'},
                                    {text: fp_foundation_assistant_localized_script.all_closed, value: '3'},
                                ]
                            }],

                            onsubmit: function( e ) {
                            if( e.data.option == 1) {

                                var rawTemplate = '[fp-accordion-wrap]<br>';

                                for (var i = 0; i < e.data.level; i++) {
                                    var tab = i + 1;
                                   
                                    if (tab === 1) {
                                        rawTemplate += "[fp-accordion open='true' title='{{title}} "+ tab + "']{{content}} "+ tab + "[/fp-accordion]<br>";
                                    } else {
                                        rawTemplate += "[fp-accordion title='{{title}} "+ tab + "']{{content}} "+ tab + "[/fp-accordion]<br>";
                                    }                                     
                                } 

                                rawTemplate += '[/fp-accordion-wrap]<br>';
                                rawTemplate += '&nbsp;';

                            } else if (e.data.option == 2) {

                                var rawTemplate = "[fp-accordion-wrap multiexpand='true']<br>";

                                for (var i = 0; i < e.data.level; i++) {
                                    var tab = i + 1;
                                   
                                    if (tab === 1) {
                                        rawTemplate += "[fp-accordion open='true' title='{{title}} "+ tab + "']{{content}} "+ tab + "[/fp-accordion]<br>";
                                    } else {
                                        rawTemplate += "[fp-accordion title='{{title}} "+ tab + "']{{content}} "+ tab + "[/fp-accordion]<br>";
                                    }                                     
                                } 

                                rawTemplate += '[/fp-accordion-wrap]<br>';
                                rawTemplate += '&nbsp;';

                            } else if (e.data.option == 3) {

                                var rawTemplate = "[fp-accordion-wrap allclosed='true']<br>";

                                for (var i = 0; i < e.data.level; i++) {
                                    var tab = i + 1;
                                   
                                    rawTemplate += "[fp-accordion title='{{title}} "+ tab + "']{{content}} "+ tab + "[/fp-accordion]<br>";                                   
                                } 

                                rawTemplate += '[/fp-accordion-wrap]<br>';
                                rawTemplate += '&nbsp;';                              
                            }
                                var compiledTemplate = Handlebars.compile(rawTemplate); 
                                editor.insertContent(compiledTemplate({
                                    title: fp_foundation_assistant_localized_script.element_title,
                                    content: fp_foundation_assistant_localized_script.tab_content,
                                }));
                            }
                        });
                    }
                },
                ]
            },{
                text: fp_foundation_assistant_localized_script.carousels,
                menu: [
            {
                text: fp_foundation_assistant_localized_script.carousel_orbit,
                onclick: function() {
                    editor.windowManager.open( {
                        title: fp_foundation_assistant_localized_script.carousel_orbit,
                        width : 300,
                        height: 100,
                        body: [{
                            type: 'listbox',                                 
                            name: 'level', 
                            label: fp_foundation_assistant_localized_script.slides, 
                            'values': [
                                {text: fp_foundation_assistant_localized_script.one, value: '1'},
                                {text: fp_foundation_assistant_localized_script.two, value: '2'},
                                {text: fp_foundation_assistant_localized_script.three, value: '3'},
                                {text: fp_foundation_assistant_localized_script.four, value: '4'},
                                {text: fp_foundation_assistant_localized_script.five, value: '5'},
                                {text: fp_foundation_assistant_localized_script.six, value: '6'},
                                {text: fp_foundation_assistant_localized_script.seven, value: '7'},
                                {text: fp_foundation_assistant_localized_script.eight, value: '8'},
                                {text: fp_foundation_assistant_localized_script.nine, value: '9'},
                                {text: fp_foundation_assistant_localized_script.ten, value: '10'}
                            ]
                        }],
                        onsubmit: function( e ) {
                            var rawTemplate = "[fp-orbits label='']<br>";

                            for (var i = 0; i < e.data.level; i++) {
                                    var tab = i + 1;
                                   
                                    if (tab === 1) {
                                        rawTemplate += "[fp-orbit title='{{title}} "+ tab + "']{{content}} "+ tab + "[/fp-orbit]<br>"; 
                                    } else {
                                        rawTemplate += "[fp-orbit title='{{title}} "+ tab + "']{{content}} "+ tab + "[/fp-orbit]<br>";
                                    }                                     
                                } 

                            rawTemplate += '[/fp-orbits]<br>';  
                            rawTemplate += '&nbsp;';

                            var compiledTemplate = Handlebars.compile(rawTemplate); 

                                editor.insertContent(compiledTemplate({
                                    title: fp_foundation_assistant_localized_script.element_title,
                                    content: fp_foundation_assistant_localized_script.tab_content,
                                }));

                        }
                    });
                }
            },{
                text: fp_foundation_assistant_localized_script.carousel_owl,
                onclick: function() {
                    editor.windowManager.open( {
                        title: fp_foundation_assistant_localized_script.carousel_owl,
                        width : 300,
                        height: 110,
                        body: [{
                            type: 'listbox', 
                            name: 'columns', 
                            label: fp_foundation_assistant_localized_script.no_of_columns, 
                            'values': [
                                {text: fp_foundation_assistant_localized_script.one, value: "columns='one'"},
                                {text: fp_foundation_assistant_localized_script.two, value: "columns='two'"},
                                {text: fp_foundation_assistant_localized_script.three, value: "columns='three'"},
                                {text: fp_foundation_assistant_localized_script.four, value: "columns='four'"},
                                {text: fp_foundation_assistant_localized_script.five, value: "columns='five'"},
                                {text: fp_foundation_assistant_localized_script.six, value: "columns='six'"}
                            ]
                        },
                        {
                            type: 'listbox', 
                            name: 'items', 
                            label: fp_foundation_assistant_localized_script.slides, 
                            'values': [
                                {text: fp_foundation_assistant_localized_script.one, value: '1'},
                                {text: fp_foundation_assistant_localized_script.two, value: '2'},
                                {text: fp_foundation_assistant_localized_script.three, value: '3'},
                                {text: fp_foundation_assistant_localized_script.four, value: '4'},
                                {text: fp_foundation_assistant_localized_script.five, value: '5'},
                                {text: fp_foundation_assistant_localized_script.six, value: '6'},
                                {text: fp_foundation_assistant_localized_script.seven, value: '7'},
                                {text: fp_foundation_assistant_localized_script.eight, value: '8'},
                                {text: fp_foundation_assistant_localized_script.nine, value: '9'},
                                {text: fp_foundation_assistant_localized_script.ten, value: '10'}
                            ]
                        }],
                        onsubmit: function( e ) {

                            var fp_carousel_classes = new Array();

                            if ( e.data.columns.length !== 0 ) { fp_carousel_classes.push( e.data.columns ); }   

                            if ( fp_carousel_classes.length !== 0 ) { fp_carousel_classes = ' ' + fp_carousel_classes.join( " " ); } 

                            var rawTemplate = '[fp-carousel{{carousel_classes}}]<br>';

                            for (var i = 0; i < e.data.items; i++) {
                                    var slider = i + 1;
                                    rawTemplate += "[fp-carousel-item image='' title='']{{content}} " + slider + "[/fp-carousel-item]<br>";                                    
                                } 

                            rawTemplate += '[/fp-carousel]<br>';  
                            rawTemplate += '&nbsp;';

                            var compiledTemplate = Handlebars.compile(rawTemplate); 
                            editor.insertContent(compiledTemplate({ 
                                content: fp_foundation_assistant_localized_script.tab_content,
                                carousel_classes: fp_carousel_classes,   
                            }));
                        }
                    });
                }
            }]
            },
            {
                text: fp_foundation_assistant_localized_script.menus,
                menu: [
                {
                    text: fp_foundation_assistant_localized_script.menu,
                    onclick: function() {
                        editor.windowManager.open( {
                            title: fp_foundation_assistant_localized_script.menu,
                            width : 350,
                            height: 110,
                            body: [{
                                type: 'listbox', 
                                name: 'type', 
                                label: fp_foundation_assistant_localized_script.menu_type, 
                                'values': [
                                    {text: fp_foundation_assistant_localized_script.vertical_menu, value: "type='vertical'"},
                                    {text: fp_foundation_assistant_localized_script.accordion_menu, value: "type='accordion'"},
                                    {text: fp_foundation_assistant_localized_script.dropdown_menu, value: "type='dropdown'"},
                                    {text: fp_foundation_assistant_localized_script.drilldown_menu, value: "type='drilldown'"}
                                ]
                            },{
                                type: 'listbox', 
                                name: 'items', 
                                label: fp_foundation_assistant_localized_script.no_of_items, 
                                'values': [
                                    {text: fp_foundation_assistant_localized_script.one, value: '1'},
                                    {text: fp_foundation_assistant_localized_script.two, value: '2'},
                                    {text: fp_foundation_assistant_localized_script.three, value: '3'},
                                    {text: fp_foundation_assistant_localized_script.four, value: '4'},
                                    {text: fp_foundation_assistant_localized_script.five, value: '5'},
                                    {text: fp_foundation_assistant_localized_script.six, value: '6'},
                                    {text: fp_foundation_assistant_localized_script.seven, value: '7'},
                                    {text: fp_foundation_assistant_localized_script.eight, value: '8'},
                                    {text: fp_foundation_assistant_localized_script.nine, value: '9'},
                                    {text: fp_foundation_assistant_localized_script.ten, value: '10'}
                                ]
                            }],


                            onsubmit: function( e ) {

                                var fp_menu_classes = new Array();

                                if ( e.data.type.length !== 0 ) { fp_menu_classes.push( e.data.type ); }   

                                if ( fp_menu_classes.length !== 0 ) { fp_menu_classes = ' ' + fp_menu_classes.join( " " ); } 
                                
                                var rawTemplate = '[fp-menu{{menu_classes}}]<br>';

                                for (var i = 0; i < e.data.items; i++) {
                                        var item = i + 1;
                                        rawTemplate += "[fp-menu-item title='{{menu_item}} "+ item + "' link='http://' ]<br>[/fp-menu-item]<br>";                                    
                                    } 

                                rawTemplate += '[/fp-menu]<br>';  
                                rawTemplate += '&nbsp;';

                                var compiledTemplate = Handlebars.compile(rawTemplate); 
                                editor.insertContent(compiledTemplate({
                                    menu_item: fp_foundation_assistant_localized_script.menu_item,   
                                    menu_classes: fp_menu_classes,  
                                }));

                            }
                        });
                    }
                },{
                    text: fp_foundation_assistant_localized_script.nested_menu,
                    onclick: function() {
                        editor.windowManager.open( {
                            title: fp_foundation_assistant_localized_script.nested_menu,
                            width : 350,
                            height: 80,
                            body: [{
                                type: 'listbox', 
                                name: 'items', 
                                label: fp_foundation_assistant_localized_script.no_of_items, 
                                'values': [
                                    {text: fp_foundation_assistant_localized_script.one, value: '1'},
                                    {text: fp_foundation_assistant_localized_script.two, value: '2'},
                                    {text: fp_foundation_assistant_localized_script.three, value: '3'},
                                    {text: fp_foundation_assistant_localized_script.four, value: '4'},
                                    {text: fp_foundation_assistant_localized_script.five, value: '5'},
                                    {text: fp_foundation_assistant_localized_script.six, value: '6'},
                                    {text: fp_foundation_assistant_localized_script.seven, value: '7'},
                                    {text: fp_foundation_assistant_localized_script.eight, value: '8'},
                                    {text: fp_foundation_assistant_localized_script.nine, value: '9'},
                                    {text: fp_foundation_assistant_localized_script.ten, value: '10'}
                                ]
                            }],


                            onsubmit: function( e ) {
                                
                                var rawTemplate = '[fp-menu-nested]<br>';

                                for (var i = 0; i < e.data.items; i++) {
                                        var item = i + 1;
                                        rawTemplate += "[fp-submenu-item title='{{submenu_item}} "+ item+ "' link='http://' ]<br>[/fp-submenu-item]<br>";                                    
                                    } 

                                rawTemplate += '[/fp-menu-nested]<br>';  
                                rawTemplate += '&nbsp;';

                                var compiledTemplate = Handlebars.compile(rawTemplate); 
                                editor.insertContent(compiledTemplate({
                                    submenu_item: fp_foundation_assistant_localized_script.submenu_item,     
                                }));

                            }
                        });
                    }
                }]   
            },
            {
                text:fp_foundation_assistant_localized_script.foundation_elements,
                menu: [
                {
                    text: fp_foundation_assistant_localized_script.buttons,
                    onclick: function() {
                        editor.windowManager.open( {
                            title: fp_foundation_assistant_localized_script.buttons,
                            width : 300,
                            height: 210,
                            body: [{
                                type: 'listbox', 
                                name: 'type', 
                                label: fp_foundation_assistant_localized_script.element_type, 
                                'values': [
                                    {text: fp_foundation_assistant_localized_script.element_button, value: ''},
                                    {text: fp_foundation_assistant_localized_script.element_link, value: "type='link'"},
                                    {text: fp_foundation_assistant_localized_script.element_submit, value: "type='submit'"},
                                    {text: fp_foundation_assistant_localized_script.element_reset, value: "type='reset'"},
                                ]
                            },{
                                type: 'listbox', 
                                name: 'size', 
                                label: fp_foundation_assistant_localized_script.element_size, 
                                'values': [
                                    {text: fp_foundation_assistant_localized_script.basic, value: ''},
                                    {text: fp_foundation_assistant_localized_script.tiny, value: "size='tiny'"},
                                    {text: fp_foundation_assistant_localized_script.small, value: "size='small'"},
                                    {text: fp_foundation_assistant_localized_script.large, value: "size='large'"},
                                    {text: fp_foundation_assistant_localized_script.expanded, value: "size='expanded'"}
                                ]
                            },{
                                type: 'listbox', 
                                name: 'color', 
                                label: fp_foundation_assistant_localized_script.element_color, 
                                'values': [
                                    {text: fp_foundation_assistant_localized_script.primary, value: ''},
                                    {text: fp_foundation_assistant_localized_script.secondary, value: "color='secondary'"},
                                    {text: fp_foundation_assistant_localized_script.success, value: "color='success'"},
                                    {text: fp_foundation_assistant_localized_script.alert, value: "color='alert'"},
                                    {text: fp_foundation_assistant_localized_script.warning, value: "color='warning'"},
                                    {text: fp_foundation_assistant_localized_script.style_disabled, value: "color='disabled'"}
                                ]
                            },{
                                type: 'checkbox',
                                name: 'hollow',
                                text: fp_foundation_assistant_localized_script.hollow,   
                                classes: 'fp-hollow-button'                 
                            },{
                                type: 'checkbox',
                                name: 'dropdown',
                                text: fp_foundation_assistant_localized_script.dropdown,   
                                classes: 'fp-dropdown-button'                 
                            }],
                            onsubmit: function( e ) {

                                var fp_hollow;
                                var fp_dropdown;

                                if(e.data.hollow === true) { fp_hollow = " hollow='true'"; } else { fp_hollow = ''; }
                                if(e.data.dropdown === true) { fp_dropdown = " dropdown='true'"; } else { fp_dropdown = ''; }

                                var fp_button_classes = new Array();

                                if ( e.data.size.length !== 0 ) { fp_button_classes.push( e.data.size ); }   
                                if ( e.data.color.length !== 0 ) { fp_button_classes.push( e.data.color ); }   
                                if ( e.data.type.length !== 0 ) { fp_button_classes.push( e.data.type ); } 

                                if ( fp_button_classes.length !== 0 ) { fp_button_classes = ' ' + fp_button_classes.join( " " ); }

                                var rawTemplate = '';

                                if (e.data.type == "type='link'"){

                                    rawTemplate += "[fp-button{{button_classes}}{{hollow}}{{dropdown}} link='']"; 
                                } else {

                                    rawTemplate += "[fp-button{{button_classes}}{{hollow}}{{dropdown}}]"; 
                                }                                      
        
                                rawTemplate += '[/fp-button]<br>';  
                                rawTemplate += '&nbsp;';                 

                                var compiledTemplate = Handlebars.compile(rawTemplate); 
                                editor.insertContent(compiledTemplate({ 
                                    button_classes: fp_button_classes,
                                    hollow: fp_hollow,
                                    dropdown: fp_dropdown,
                                }));
                                
                            }
                        });
                    }
                },
                {
                    text: fp_foundation_assistant_localized_script.callout,
                    onclick: function() {
                        editor.windowManager.open( {
                            title: fp_foundation_assistant_localized_script.callout,
                            width: 300,
                            height: 140,
                            body: [{
                                type: 'listbox', 
                                name: 'size', 
                                label: fp_foundation_assistant_localized_script.element_size, 
                                'values': [
                                    {text: fp_foundation_assistant_localized_script.basic, value: ''},
                                    {text: fp_foundation_assistant_localized_script.small, value: "size='small'"},
                                    {text: fp_foundation_assistant_localized_script.large, value: "size='large'"},
                                ]
                            },{
                                type: 'listbox', 
                                name: 'color', 
                                label: fp_foundation_assistant_localized_script.element_color, 
                                'values': [
                                    {text: fp_foundation_assistant_localized_script.none, value: ""},
                                    {text: fp_foundation_assistant_localized_script.primary, value: "color='primary'"},
                                    {text: fp_foundation_assistant_localized_script.secondary, value: "color='secondary'"},
                                    {text: fp_foundation_assistant_localized_script.success, value: "color='success'"},
                                    {text: fp_foundation_assistant_localized_script.alert, value: "color='alert'"},
                                    {text: fp_foundation_assistant_localized_script.warning, value: "color='warning'"},
                                    
                                ]
                            },{
                                type: 'checkbox',
                                name: 'closable',
                                text: fp_foundation_assistant_localized_script.closable,   
                                classes: 'fp-closable-callout'                 
                            }],
                            onsubmit: function( e ) {

                                var fp_callout_classes = new Array();
 
                                if ( e.data.color.length !== 0 ) { fp_callout_classes.push( e.data.color ); }   
                                if ( e.data.size.length !== 0 ) { fp_callout_classes.push( e.data.size ); }                                 
                                if ( e.data.closable === true) { fp_callout_classes.push("closable='true'"); } 

                                if ( fp_callout_classes.length !== 0 ) { fp_callout_classes = ' ' + fp_callout_classes.join( " " ); }

                                var rawTemplate = "[fp-callout{{callout_classes}}]"; 
                                rawTemplate += "{{place_content}}"; 
                                rawTemplate += "[/fp-callout]<br>"; 
                                rawTemplate += '&nbsp;';

                                var compiledTemplate = Handlebars.compile(rawTemplate); 
                                editor.insertContent(compiledTemplate({ 
                                    place_content: fp_foundation_assistant_localized_script.place_content,
                                    callout_classes:fp_callout_classes,
                                }));                            
                            }
                        });
                    }
                },
                {
                    text: fp_foundation_assistant_localized_script.dropdown,
                    onclick: function() {
                        editor.windowManager.open( {
                            title: fp_foundation_assistant_localized_script.dropdown,
                            width: 300,
                            height: 100,
                            body: [{
                                type: 'listbox', 
                                name: 'position', 
                                label: fp_foundation_assistant_localized_script.element_position, 
                                'values': [
                                    {text: fp_foundation_assistant_localized_script.position_bottom, value: "position='bottom'"},
                                    {text: fp_foundation_assistant_localized_script.position_top, value: "position='top'"},
                                    {text: fp_foundation_assistant_localized_script.position_right, value: "position='right'"},
                                ]
                            },{
                                type: 'checkbox',
                                name: 'hover',
                                text: fp_foundation_assistant_localized_script.hover,   
                                classes: 'fp-hover-dropdown'                 
                            }],
                            onsubmit: function( e ) {

                                var fp_dropdown_classes = new Array();

                                if ( e.data.hover === true ) { fp_dropdown_classes.push( "hover='true'" ); }
                                if ( e.data.position.length !== 0 ) { fp_dropdown_classes.push( e.data.position ); }               

                                if ( fp_dropdown_classes.length !== 0 ) { fp_dropdown_classes = ' ' + fp_dropdown_classes.join( " " ); }

                                var rawTemplate = "[fp-dropdown{{dropdown_classes}} title='{{title}}']"; 
                                rawTemplate += "{{place_content}}"; 
                                rawTemplate += "[/fp-dropdown]<br>"; 
                                rawTemplate += '&nbsp;';

                                var compiledTemplate = Handlebars.compile(rawTemplate); 
                                editor.insertContent(compiledTemplate({                                  
                                    title: fp_foundation_assistant_localized_script.element_title,
                                    place_content: fp_foundation_assistant_localized_script.place_content,                                    
                                    dropdown_classes: fp_dropdown_classes,
                                }));                            
                            }
                        });
                    }
                },
                {
                    text: fp_foundation_assistant_localized_script.flex_video,
                    onclick: function() {
                        editor.windowManager.open( {
                            title: fp_foundation_assistant_localized_script.flex_video,
                            width: 300,
                            height: 90,
                            body: [{
                                type: 'checkbox',
                                name: 'widescreen',
                                text: fp_foundation_assistant_localized_script.widescreen,   
                                classes: 'fp-widescreen-video'                 
                            },{
                                type: 'checkbox',
                                name: 'vimeo',
                                text: fp_foundation_assistant_localized_script.vimeo,   
                                classes: 'fp-vimeo-video'                 
                            }],
                            onsubmit: function( e ) {

                                var fp_video_classes = new Array();

                                if(  e.data.widescreen === true  ) { fp_video_classes.push( "widescreen='true'" ); }
                                if(  e.data.vimeo === true  ) { fp_video_classes.push( "vimeo='true'" ); }

                                if ( fp_video_classes.length !== 0 ) { fp_video_classes = ' ' + fp_video_classes.join( " " ); }

                                var rawTemplate = "[fp-video{{video_clases}} link='{{embed_link}}' ]"; 
                                rawTemplate += "[/fp-video]<br>"; 
                                rawTemplate += '&nbsp;';

                                var compiledTemplate = Handlebars.compile(rawTemplate); 
                                editor.insertContent(compiledTemplate({
                                    embed_link:fp_foundation_assistant_localized_script.embed_link,
                                    video_clases: fp_video_classes,      
                                }));                            
                            }
                        });
                    }
                },
                {
                    text: fp_foundation_assistant_localized_script.interchange,
                    onclick: function() {
                        editor.windowManager.open( {
                            title: fp_foundation_assistant_localized_script.interchange,
                            width: 400,
                            height:70,
                            body: [{
                                type: 'container',
                                name: 'container',
                                html: fp_foundation_assistant_localized_script.place_interchange,   
                                classes: 'fp-dropdown'                 
                            }],
                            onsubmit: function( e ) {

                                var fp_interchange_classes = new Array();

                                if ( fp_interchange_classes.length !== 0 ) { fp_interchange_classes = ' ' + fp_interchange_classes.join( " " ); }

                                var rawTemplate = "[fp-interchange small='' medium='' large='']"; 
                                rawTemplate += "[/fp-interchange]<br>"; 
                                rawTemplate += '&nbsp;';

                                var compiledTemplate = Handlebars.compile(rawTemplate); 
                                editor.insertContent(compiledTemplate());                            
                            }
                        });
                    }
                },
                {
                    text: fp_foundation_assistant_localized_script.element_label,
                    onclick: function() {
                        editor.windowManager.open( {
                            title: fp_foundation_assistant_localized_script.element_label,
                            width: 300,
                            height: 70,
                            body: [{
                                type: 'listbox', 
                                name: 'color', 
                                label: fp_foundation_assistant_localized_script.element_color, 
                                'values': [
                                    {text: fp_foundation_assistant_localized_script.primary, value: ''},
                                    {text: fp_foundation_assistant_localized_script.secondary, value: "color='secondary'"},
                                    {text: fp_foundation_assistant_localized_script.success, value: "color='success'"},
                                    {text: fp_foundation_assistant_localized_script.alert, value: "color='alert'"},
                                    {text: fp_foundation_assistant_localized_script.warning, value: "color='warning'"}
                                ]
                            }],
                            onsubmit: function( e ) {

                                var fp_label_classes = new Array();

                                if ( e.data.color.length !== 0 ) { fp_label_classes.push( e.data.color ); } 

                                if ( fp_label_classes.length !== 0 ) { fp_label_classes = ' ' + fp_label_classes.join( " " ); }

                                var rawTemplate = "[fp-label{{label_classes}}]"; 
                                rawTemplate += "{{place_content}}";
                                rawTemplate += "[/fp-label]<br>"; 
                                rawTemplate += '&nbsp;';

                                var compiledTemplate = Handlebars.compile(rawTemplate); 
                                editor.insertContent(compiledTemplate({ 
                                    place_content: fp_foundation_assistant_localized_script.place_content,         
                                    label_classes: fp_label_classes,     
                                }));                            
                            }
                        });
                    }
                },
                {
                    text: fp_foundation_assistant_localized_script.progress,
                    onclick: function() {
                        editor.windowManager.open( {
                            title: fp_foundation_assistant_localized_script.progress,
                            width: 300,
                            height: 70,
                            body: [{
                                type: 'listbox', 
                                name: 'color', 
                                label: fp_foundation_assistant_localized_script.element_color, 
                                'values': [
                                    {text: fp_foundation_assistant_localized_script.primary, value: ''},
                                    {text: fp_foundation_assistant_localized_script.secondary, value: "color='secondary'"},
                                    {text: fp_foundation_assistant_localized_script.success, value: "color='success'"},
                                    {text: fp_foundation_assistant_localized_script.alert, value: "color='alert'"},
                                    {text: fp_foundation_assistant_localized_script.warning, value: "color='warning'"}
                                ]
                            }],
                            onsubmit: function( e ) {

                                var fp_progress_classes = new Array();

                                if ( e.data.color.length !== 0 ) { fp_progress_classes.push( e.data.color ); } 

                                if ( fp_progress_classes.length !== 0 ) { fp_progress_classes = ' ' + fp_progress_classes.join( " " ); }

                                var rawTemplate = "[fp-progress{{progress_classes}} current='' min='' max='' width='50' text='']"; 
                                rawTemplate += "[/fp-progress]<br>"; 
                                rawTemplate += '&nbsp;';

                                var compiledTemplate = Handlebars.compile(rawTemplate); 
                                editor.insertContent(compiledTemplate({ 
                                    progress_classes: fp_progress_classes,
                                }));                            
                            }
                        });
                    }
                },
                {
                    text: fp_foundation_assistant_localized_script.reveal,
                    onclick: function() {
                        editor.windowManager.open( {
                            title: fp_foundation_assistant_localized_script.reveal,
                            width: 300,
                            height: 100,
                            body: [{
                                type: 'listbox', 
                                name: 'size', 
                                label: fp_foundation_assistant_localized_script.element_size, 
                                'values': [
                                    {text: fp_foundation_assistant_localized_script.basic, value: ''},
                                    {text: fp_foundation_assistant_localized_script.tiny, value: "size='tiny'"},
                                    {text: fp_foundation_assistant_localized_script.small, value: "size='small'"},
                                    {text: fp_foundation_assistant_localized_script.large, value: "size='large'"},
                                    {text: fp_foundation_assistant_localized_script.full, value: "size='full'"}
                                ]
                            },{
                                type: 'checkbox',
                                name: 'overlay',
                                text: fp_foundation_assistant_localized_script.overlay,   
                                classes: 'fp-overlay-reveal'                 
                            }],
                            onsubmit: function( e ) {

                                var fp_reveal_classes = new Array();

                                if ( e.data.size.length !== 0 ) { fp_reveal_classes.push( e.data.size ); } 
                                if( e.data.overlay === true) { fp_reveal_classes.push( "overlay='false'" ); } 

                                if ( fp_reveal_classes.length !== 0 ) { fp_reveal_classes = ' ' + fp_reveal_classes.join( " " ); }                                

                                var rawTemplate = "[fp-reveal{{reveal_classes}} title='']"; 
                                rawTemplate += "{{place_content}}"; 
                                rawTemplate += "[/fp-reveal]<br>"; 
                                rawTemplate += '&nbsp;';

                                var compiledTemplate = Handlebars.compile(rawTemplate); 
                                editor.insertContent(compiledTemplate({ 
                                    place_content: fp_foundation_assistant_localized_script.place_content,                    
                                    reveal_classes: fp_reveal_classes,  
                                }));                            
                            }
                        });
                    }
                },
                {
                    text: fp_foundation_assistant_localized_script.tooltip,
                    onclick: function() {
                        editor.windowManager.open( {
                            title: fp_foundation_assistant_localized_script.tooltip,
                            width: 300,
                            height: 100,
                            body: [{
                                type: 'listbox', 
                                name: 'position', 
                                label: fp_foundation_assistant_localized_script.element_position, 
                                'values': [
                                    {text: fp_foundation_assistant_localized_script.position_bottom, value: ''},
                                    {text: fp_foundation_assistant_localized_script.position_top, value: "position='top'"},
                                    {text: fp_foundation_assistant_localized_script.position_right, value: "position='right'"},
                                    {text: fp_foundation_assistant_localized_script.position_left, value: "position='left'"}
                                ]
                            },{
                                type: 'checkbox',
                                name: 'hover',
                                text: fp_foundation_assistant_localized_script.hover,   
                                classes: 'fp-hover-tooltip'                 
                            }],
                            onsubmit: function( e ) {

                               
                                

                                var fp_tooltip_classes = new Array();

                                if ( e.data.position.length !== 0 ) { fp_tooltip_classes.push( e.data.position ); } 
                                if ( e.data.hover === true ) { fp_tooltip_classes.push( "hover='true'" ); } 

                                if ( fp_tooltip_classes.length !== 0 ) { fp_tooltip_classes = ' ' + fp_tooltip_classes.join( " " ); }

                                var rawTemplate = "[fp-tooltip{{tooltip_classes}} title='']"; 
                                rawTemplate += "{{place_content}}"; 
                                rawTemplate += "[/fp-tooltip]<br>"; 
                                rawTemplate += '&nbsp;';

                                var compiledTemplate = Handlebars.compile(rawTemplate); 
                                editor.insertContent(compiledTemplate({ 
                                    place_content: fp_foundation_assistant_localized_script.place_content, 
                                    tooltip_classes: fp_tooltip_classes,   
                                }));                            
                            }
                        });
                    }
                }
                ]
            }   
           ]
        });
    });
})();   

