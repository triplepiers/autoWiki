<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">

            <!---- TEAM NAME ---->
            <RouterLink to="/" class="navbar-brand">ZJU-China</RouterLink>

            <!---- SMALL SCREEN MENU ICON ---->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto left-aligned">

                    <!---- TEST ---->
                    <li class="nav-item">
                        <RouterLink to="/test" class="nav-link"
                            style="color:orange;">
                            Test
                        </RouterLink>
                    </li>

                    <!---- HOME ---->
                    <li class="nav-item">
                        <RouterLink to="/" class="nav-link">Home</RouterLink>
                    </li>

                    <!---- TEAM ---->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="{{ url_for('pages', page='team') }}"
                            id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Team
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <RouterLink to="/team" class="dropdown-item">
                                    Team
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/attributions" class="dropdown-item">
                                    Attributions
                                </RouterLink>
                            </li>
                        </ul>
                    </li>

                    <!---- PROJECT ---->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Project
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <RouterLink to="/contribution" class="dropdown-item">
                                    Contribution
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/description" class="dropdown-item">
                                    Description
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/engineering" class="dropdown-item">
                                    Engineering
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/experiments" class="dropdown-item">
                                    Experiments
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/notebook" class="dropdown-item">
                                    Notebook
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/results" class="dropdown-item">
                                    Results
                                </RouterLink>
                            </li>
                        </ul>
                    </li>

                    <!---- SAFETY ---->
                    <li class="nav-item">
                        <RouterLink to="/safety" class="nav-link">Safety</RouterLink>
                    </li>

                    <!---- HUMAN PRACTICES ---->
                    <li class="nav-item">
                        <RouterLink to="/human-practices" class="nav-link">Human Practices</RouterLink>
                    </li>

                    <!---- AWARDS ---->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Awards
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <RouterLink to="/education" class="dropdown-item">
                                    Education
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/entrepreneurship" class="dropdown-item">
                                    Entrepreneurship
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/hardware" class="dropdown-item">
                                    Hardware
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/inclusivity" class="dropdown-item">
                                    Inclusivity
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/measurement" class="dropdown-item">
                                    Measurement
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/model" class="dropdown-item">
                                    Model
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/plant" class="dropdown-item">
                                    Plant
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/software" class="dropdown-item">
                                    Software
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/sustainable" class="dropdown-item">
                                    Sustainable
                                </RouterLink>
                            </li>
                        </ul>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped></style>
